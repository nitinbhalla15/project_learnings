import { useRecoilValue, useSetRecoilState } from "recoil"
import {  userEmailId, userFirstName, userLastName, userPassword } from "../recoil-state-store/SignUpStateAtoms"
import React from "react";
import { userList } from "../recoil-state-store/DashboardAtomState";

export const InputBox = React.memo(({title,boxtype})=>{
    const setFirstName = useSetRecoilState(userFirstName);
    const setLastName = useSetRecoilState(userLastName);
    const setEmailId = useSetRecoilState(userEmailId);
    const setPassword = useSetRecoilState(userPassword);
    const setUserList = useSetRecoilState(userList);
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
                }else if("Search Friends -> Transfer Money"){
                    clearTimeout(clock);
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
                            setUserList(resposne.response);
                        })
                    },300)
                }
            }} className="rounded-xl w-full p-4" type={`${boxtype}`} placeholder={`Enter your ${title}`}></input>
        </div>
    </div>
})