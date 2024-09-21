import CustomButton from "./CustomButton";
import Heading from "./Heading";
import InputBox from "./InputBox";
import LaunchCard from "./LaunchCard";

export default function TransferMoney(){
    return <LaunchCard>
            <Heading headingTitle={"Transfer Quick Money"}></Heading>
            <InputBox title={"From"}></InputBox>
            <InputBox title={"To"}></InputBox>
            <InputBox title={"Amount"}></InputBox>
            <CustomButton btnName={"Send Money"}></CustomButton>
        </LaunchCard>
}