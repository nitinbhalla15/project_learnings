import { useRecoilValue } from "recoil";
import CustomButton from "../custom-components/CustomButton";
import {Heading} from "../custom-components/Heading";
import {InputBox} from "../custom-components/InputBox";
import LaunchCard from "../custom-components/LaunchCard";
import { userDetailsSelector } from "../recoil-state-store/SignUpStateAtoms";
import {useNavigate} from "react-router-dom"

export default function SignUpPage() {
    const signUpPayload = useRecoilValue(userDetailsSelector);
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
                const jwtToken=response.response.token;
                localStorage.setItem("token",jwtToken);
                navigate("/dashboard")
            })
        }} btnName="Sign Up"></CustomButton>
        <div className="flex justify-center my-3">
            <div>Already a User ? Go To </div>
            <button className="bg-white text-black rounded-xl px-4 mx-3" onClick={()=>{
                navigate("/sign-in")
            }}>Sign-In Page</button>
        </div>
    </LaunchCard>
}