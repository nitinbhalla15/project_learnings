import { useRecoilValue } from "recoil";
import CustomButton from "../custom-components/CustomButton";
import {Heading} from "../custom-components/Heading";
import {InputBox} from "../custom-components/InputBox";
import LaunchCard from "../custom-components/LaunchCard";
import { userDetailsSelector } from "../recoil-state-store/SignUpStateAtoms";
import { useNavigate } from "react-router-dom";

export default function SignInPage(){
    const userDetails = useRecoilValue(userDetailsSelector);
    const navigate = useNavigate();
    return <LaunchCard>
        <Heading headingTitle="Sign In"></Heading>
        <InputBox title="Email"></InputBox>
        <InputBox title="Password" boxtype={"password"}></InputBox>
        <CustomButton clickFunction={()=>{
            const signInPayload = {email : userDetails.emailId,password:userDetails.password};
            fetch("http://localhost:8080/auth/login",{method:"POST",
                headers:{
                    'Content-Type':"application/json",
                    'Authorization':`Bearer ${localStorage.getItem("token")}`
                },
                body:JSON.stringify(signInPayload)
            }).then(async(res)=>{
                const response = await res.json();
                localStorage.clear();
                localStorage.setItem("token",response.response.token);
                localStorage.setItem("logged_in_user",response.response.user_id);
                navigate("/dashboard")
            })
        }} btnName="Log In"></CustomButton>
        <div className="flex justify-center my-3">
            <div>Haven't registered yet ? Go To </div>
            <button className="bg-white text-black rounded-xl px-4 mx-3" onClick={()=>{
                navigate("/sign-up")
            }}>Sign-Up Page</button>
        </div>
    </LaunchCard>
}