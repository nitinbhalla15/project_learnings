import { useRecoilValue, useSetRecoilState } from "recoil";
import CustomButton from "../custom-components/CustomButton";
import { Heading } from "../custom-components/Heading";
import { InputBox } from "../custom-components/InputBox";
import LaunchCard from "../custom-components/LaunchCard";
import { userDetailsSelector, userEmailId, userPassword } from "../recoil-state-store/SignUpStateAtoms";
import { useNavigate } from "react-router-dom";
import ErrorComponent from "../custom-components/ErrorComponent";
import { ErrorAtom } from "../recoil-state-store/ErrorAtom";
import { userDetailsAtom } from "../recoil-state-store/DashboardAtomState";

export default function SignInPage() {
    const userDetails = useRecoilValue(userDetailsSelector);
    const setErrorResponse = useSetRecoilState(ErrorAtom);
    const setUserDetails = useSetRecoilState(userDetailsAtom);
    const setUserEmailId = useSetRecoilState(userEmailId);
    const setUserPassword = useSetRecoilState(userPassword);
    const navigate = useNavigate();
    return <LaunchCard>
        <Heading headingTitle="Sign In"></Heading>
        <InputBox onChangeInput={(e)=>{
            setUserEmailId(e.target.value);
        }} title="Email"></InputBox>
        <InputBox onChangeInput={(e)=>{
            setUserPassword(e.target.value);
        }} title="Password" boxtype={"password"}></InputBox>
        <CustomButton clickFunction={() => {
            const signInPayload = { email: userDetails.emailId, password: userDetails.password };
            fetch("http://localhost:8080/auth/login", {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify(signInPayload)
            }).then(async (res) => {
                const response = await res.json();
                console.log("response on login : ", response)
                if(response.http_status_code==200){
                    localStorage.clear();
                    localStorage.setItem("token", response.response.token);
                    localStorage.setItem("logged_in_user_email",response.response.userEmail);
                    const usrDetails = {
                        currentBalance:response.response.userBalance,
                        userName:response.response.userName,
                        userEmail:response.response.userEmail
                    }
                    setUserDetails(usrDetails);
                    navigate("/dashboard");
                }else{
                    const bckErrors = response.response.errList; //Array of Errors
                    setErrorResponse(bckErrors);
                    setTimeout(()=>{
                        setErrorResponse(undefined);
                    },3000)
                }
            })
        }} btnName="Log In" isDisable={(userDetails.emailId== undefined || userDetails.password == undefined || userDetails.emailId.trim() == ""
            || userDetails.password.trim() == ""
        ) ? true : false}></CustomButton>
        <div className="flex justify-center mt-10">
            <div>Haven't registered yet ? Go To </div>
            <button className="bg-white text-black rounded-xl px-4 mx-3" onClick={() => {
                setUserEmailId(undefined);
                setUserPassword(undefined);
                navigate("/sign-up")
            }}>Sign-Up Page</button>
        </div>
    </LaunchCard>
}