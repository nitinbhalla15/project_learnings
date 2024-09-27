import { useRecoilValue, useSetRecoilState } from "recoil";
import CustomButton from "./CustomButton";
import {Heading} from "./Heading";
import {InputBox} from "./InputBox";
import LaunchCard from "./LaunchCard";
import { currentBalanceAtom, currentBalanceSelector } from "../recoil-state-store/DashboardAtomState";
import { sendAmount, toMoneyAtom } from "../recoil-state-store/transferMoney";
import {useNavigate} from "react-router-dom"

export default function TransferMoney(){
    const userDetails = useRecoilValue(currentBalanceSelector);
    const toUser = useRecoilValue(toMoneyAtom);
    const amount = useRecoilValue(sendAmount);
    const currentBalance= useRecoilValue(currentBalanceSelector);
    const setNewBalance = useSetRecoilState(currentBalanceAtom);
    // console.log("Current balance: ",curBalance)
    const navigate = useNavigate()
    // console.log("Amount : ",amount)
    return <LaunchCard>
            <Heading headingTitle={"Transfer Quick Money"}></Heading>
            <InputBox title={"From"} inpValue={userDetails.userName} dis={true}></InputBox>
            <InputBox title={"To"} inpValue={toUser} dis={true}></InputBox>
            <InputBox title={"Available Balance"} inpValue={currentBalance.userBalance} dis={true}></InputBox>
            <InputBox title={"Amount To Transfer"} boxtype={"number"}></InputBox>
            <CustomButton clickFunction={()=>{
                fetch(`http://localhost:8080/api/v1/transferMoney/${userDetails.userEmail}/${toUser}/${amount}`,
                    {method:"POST",
                        headers:{
                            'Content-Type':"application/json",
                            'Authorization':`Bearer ${localStorage.getItem("token")}`
                        }
                    }
                )
                .then(async(res)=>{
                    const response = await res.json();
                    setNewBalance(response.response.avl_balance);
                    console.log("response after money transfer :",response)
                    navigate("/dashboard")
                })
                
            }} btnName={"Send Money"} isDisable={(amount==undefined || amount.trim()=="") ? true : false} ></CustomButton>
        </LaunchCard>
}