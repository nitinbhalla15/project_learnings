import { atom, selector } from "recoil";

export const currentBalanceSelector = selector({
    key:"currentBalanceSelector",
    get:async ({get})=>{
        const res = await fetch(`http://localhost:8080/api/v1/checkBalance/${localStorage.getItem("logged_in_user")}`,{
            method:"GET",
            headers:{
                'Content-Type':"application.json",
                'Authorization':`Bearer ${localStorage.getItem("token")}`
            }
        })
        const finalRes = await res.json();
        const userDetails = {userBalance:finalRes.response.balance,userName:finalRes.response.userName,userEmail:finalRes.response.loggedInEmail};
        return userDetails;
    }
})

export const userList = atom({
    key:"userListAtom",
    default:undefined
})