import { useRecoilValue, useSetRecoilState } from "recoil";
import CustomButton from "../custom-components/CustomButton";
import {Heading} from "../custom-components/Heading";
import {InputBox} from "../custom-components/InputBox";
import LaunchCard from "../custom-components/LaunchCard";
import { userDetailsSelector, userEmailId, userFirstName, userLastName, userPassword } from "../recoil-state-store/SignUpStateAtoms";
import {useNavigate} from "react-router-dom"
import { ErrorAtom } from "../recoil-state-store/ErrorAtom";
import { userDetailsAtom } from "../recoil-state-store/DashboardAtomState";
import { BACKEND_SERVER } from "../env-store";

export default function SignUpPage() {
    const signUpPayload = useRecoilValue(userDetailsSelector);
    const setErrorResponse = useSetRecoilState(ErrorAtom);
    const setFirstName = useSetRecoilState(userFirstName);
    const setLastName = useSetRecoilState(userLastName);
    const setEmailId = useSetRecoilState(userEmailId);
    const setUserDetails = useSetRecoilState(userDetailsAtom);
    const setPassword = useSetRecoilState(userPassword);
    const navigate = useNavigate();
    return <LaunchCard>
        <Heading headingTitle="Sign Up"></Heading>
        <InputBox title="First Name" onChangeInput={(e)=>{
            setFirstName(e.target.value);
        }}></InputBox>
        <InputBox title="Last Name" onChangeInput={(e)=>{
            setLastName(e.target.value);
        }}></InputBox>
        <InputBox title="Email" onChangeInput={(e)=>{
            setEmailId(e.target.value);
        }}></InputBox>
        <InputBox title="Password" boxtype={"password"} onChangeInput={(e)=>{
            setPassword(e.target.value);
        }}></InputBox>
        <CustomButton clickFunction={()=>{
            fetch(`https://${BACKEND_SERVER}/auth/signup`,
                {method:"POST",
                headers:{
                    'Content-Type':"application/json"
                },
                body:JSON.stringify(signUpPayload)
                })
            .then(async (res)=>{
                const response = await res.json();
                console.log("Response on sign up ",response)        
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
        }} btnName="Sign Up" isDisable={(signUpPayload.emailId==undefined || signUpPayload.password==undefined || signUpPayload.firstName==undefined || signUpPayload.lastName==undefined ||signUpPayload.emailId.trim()==""
            || signUpPayload.password.trim()=="" || signUpPayload.firstName.trim()=="" || signUpPayload.lastName.trim()==""
        )?true:false}></CustomButton>
        <div className="flex justify-center mt-10">
            <div>Already a User ? Go To </div>
            <button className="bg-white text-black rounded-xl px-4 mx-3" onClick={()=>{
                setFirstName(undefined);
                setLastName(undefined);
                setEmailId(undefined);
                setPassword(undefined);
                navigate("/sign-in")
            }}>Sign-In Page</button>
        </div>
    </LaunchCard>
}