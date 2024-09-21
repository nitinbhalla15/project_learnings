import CustomButton from "../custom-components/CustomButton";
import Heading from "../custom-components/Heading";
import InputBox from "../custom-components/InputBox";
import LaunchCard from "../custom-components/LaunchCard";

export default function SignInPage(){
    return <LaunchCard>
        <Heading headingTitle="Sign In"></Heading>
        <InputBox title="Email"></InputBox>
        <InputBox title="Password" boxtype={"password"}></InputBox>
        <CustomButton btnName="Log In"></CustomButton>
    </LaunchCard>
}