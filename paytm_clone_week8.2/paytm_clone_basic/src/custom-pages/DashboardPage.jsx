import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import BalanceComponent from "../custom-components/BalanceComponent";
import {InputBox} from "../custom-components/InputBox";
import TopBar from "../custom-components/TopBar";
import UserList from "../custom-components/UserListComp";
import { currentBalanceSelector, userList } from "../recoil-state-store/DashboardAtomState";

export default function DashboardPage(){
    const curBalance = useRecoilValueLoadable(currentBalanceSelector);
    const useList = useRecoilValue(userList);
    if(curBalance.state=='loading'){
        return <div>
            Loading...
        </div>
    }
    return <div className="bg-slate-700 h-screen">
        <TopBar username={curBalance.contents.userName}></TopBar>
        <BalanceComponent currentBalance={curBalance.contents.userBalance}></BalanceComponent>
        <InputBox title={"Search Friends -> Transfer Money"}></InputBox>
        {useList!=undefined && useList.map(element => {
            const userShowDetails = {initial:element.friendName,userName:element.friendName,emailId:element.emailId};
            console.log("User detail Element : ",userShowDetails)
            return <UserList user={userShowDetails} loggedInUser={curBalance.contents.userEmail}></UserList>
        })}
    </div>
} 