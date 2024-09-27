import { useRecoilValue, useSetRecoilState } from "recoil"
import {  userEmailId, userFirstName, userLastName, userPassword } from "../recoil-state-store/SignUpStateAtoms"
import React from "react";
import { userList, userNotFoundAtom } from "../recoil-state-store/DashboardAtomState";
import { sendAmount, toMoneyAtom } from "../recoil-state-store/transferMoney";

export const InputBox = React.memo(({title,boxtype,inpValue,dis})=>{
    const setFirstName = useSetRecoilState(userFirstName);
    const setLastName = useSetRecoilState(userLastName);
    const setEmailId = useSetRecoilState(userEmailId);
    const setPassword = useSetRecoilState(userPassword);
    const setUserList = useSetRecoilState(userList);
    const setToContact = useSetRecoilState(toMoneyAtom);
    const setAmount = useSetRecoilState(sendAmount);
    const setUserNotFound =  useSetRecoilState(userNotFoundAtom);
    let clock;
    console.log("Input box renders")
    return <div className="m-2 p-4 flex flex-col">
        <div className="mt-4 text-xl font-bold">
            {title}
        </div>
        <div className="mt-4 text-black">
            <input onChange={(e)=>{
                if(title=="First Name"){
                    setFirstName(e.target.value);
                }else if(title=="Last Name"){
                    setLastName(e.target.value);
                }else if(title=="Email"){
                    setEmailId(e.target.value);
                }else if(title=="Password"){
                    setPassword(e.target.value);
                }else if(title=="Search Friends -> Transfer Money"){
                    clearTimeout(clock);
                    {e.target.value.trim()!=""?
                    clock = setTimeout(()=>{
                        fetch(`http://localhost:8080/api/v1/searchUsers/${e.target.value}`,{
                            method:"GET",
                            headers:{
                                'Content-Type':"application/json",
                                'Authorization':`Bearer ${localStorage.getItem("token")}`
                            }
                        })
                        .then(async(res)=>{
                            const resposne = await res.json();
                            if(resposne.response.length>0){
                                setUserList(resposne.response);
                                setUserNotFound(undefined)
                            }else{
                                setUserNotFound("No user Found :(")
                                setUserList(undefined)
                            }
                        })
                    },300):setUserList([])}
                }else if(title=="To"){
                    setToContact(e.target.value);
                }else if(title=="Amount To Transfer"){
                    setAmount(e.target.value);
                }
            }} className="rounded-xl w-full p-4" type={`${boxtype}`} value={inpValue} disabled={dis} placeholder={`Enter your ${title}`}></input>
        </div>
    </div>
})