import { useRecoilValue, useSetRecoilState } from "recoil";
import CustomButton from "../custom-components/CustomButton";
import {Heading} from "../custom-components/Heading";
import {InputBox} from "../custom-components/InputBox";
import LaunchCard from "../custom-components/LaunchCard";
import { userDetailsSelector, userEmailId, userFirstName, userLastName, userPassword } from "../recoil-state-store/SignUpStateAtoms";
import {useNavigate} from "react-router-dom"
import { ErrorAtom } from "../recoil-state-store/ErrorAtom";

export default function SignUpPage() {
    const signUpPayload = useRecoilValue(userDetailsSelector);
    const setErrorResponse = useSetRecoilState(ErrorAtom);
    const setFirstName = useSetRecoilState(userFirstName);
    const setLastName = useSetRecoilState(userLastName);
    const setEmailId = useSetRecoilState(userEmailId);
    const setPassword = useSetRecoilState(userPassword);
    console.log("Sign up page renders")
    const navigate = useNavigate();
    return <LaunchCard>
        <Heading headingTitle="Sign Up"></Heading>
        <InputBox title="First Name"></InputBox>
        <InputBox title="Last Name"></InputBox>
        <InputBox title="Email"></InputBox>
        <InputBox title="Password" boxtype={"password"}></InputBox>
        <CustomButton clickFunction={()=>{
            fetch('http://localhost:8080/auth/signup',
                {method:"POST",
                headers:{
                    'Content-Type':"application/json"
                },
                body:JSON.stringify(signUpPayload)
                })
            .then(async (res)=>{
                const response = await res.json();
                if (response.status != "error") {
                    localStorage.clear();
                    localStorage.setItem("token", response.response.token);
                    navigate("/dashboard")
                }else{
                    const errors = response.data;
                    console.log(":Errrrr")
                    setErrorResponse(errors);
                    setTimeout(() => {
                        setErrorResponse(undefined)
                    }, 3000);
                }   
                
            })
        }} btnName="Sign Up" isDisable={(signUpPayload.emailId==undefined || signUpPayload.password==undefined || signUpPayload.firstName==undefined || signUpPayload.lastName==undefined ||signUpPayload.emailId.trim()==""
            || signUpPayload.password.trim()=="" || signUpPayload.firstName.trim()=="" || signUpPayload.lastName.trim()==""
        )?true:false}></CustomButton>
        <div className="flex justify-center my-3">
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