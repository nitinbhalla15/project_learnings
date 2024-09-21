import CustomButton from "../custom-components/CustomButton";
import Heading from "../custom-components/Heading";
import InputBox from "../custom-components/InputBox";
import LaunchCard from "../custom-components/LaunchCard";

export default function SignUpPage() {
    return <LaunchCard>
        <Heading headingTitle="Sign Up"></Heading>
        <InputBox title="First Name"></InputBox>
        <InputBox title="Last Name"></InputBox>
        <InputBox title="Email"></InputBox>
        <InputBox title="Password"></InputBox>
        <CustomButton btnName="Sign Up"></CustomButton>
    </LaunchCard>
}