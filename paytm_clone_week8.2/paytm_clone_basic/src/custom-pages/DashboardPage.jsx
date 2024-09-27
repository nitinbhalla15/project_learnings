import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import BalanceComponent from "../custom-components/BalanceComponent";
import {InputBox} from "../custom-components/InputBox";
import TopBar from "../custom-components/TopBar";
import UserList from "../custom-components/UserListComp";
import { currentBalanceSelector, userList, userNotFoundAtom } from "../recoil-state-store/DashboardAtomState";
import SearchBox from "../custom-components/SearchBox";

export default function DashboardPage(){
    const curBalance = useRecoilValueLoadable(currentBalanceSelector);
    const useList = useRecoilValue(userList);
    const userNotFound = useRecoilValue(userNotFoundAtom);
    if(curBalance.state=='loading'){
        return <div>
            Loading...
        </div>
    }
    return <div className="bg-slate-700 h-screen">
        <TopBar username={curBalance.contents.userName}></TopBar>
        <BalanceComponent currentBalance={curBalance.contents.userBalance}></BalanceComponent>
        <InputBox title={"Search Friends -> Transfer Money"}></InputBox>
        {/* <UserList searchedUsers = {useList}></UserList> */}
        <SearchBox> {userNotFound!=undefined? <div className="flex justify-center text-4xl font-bold">{userNotFound}</div> : (useList!=undefined && useList.map(element => {
            const userShowDetails = {initial:element.friendName,userName:element.friendName,emailId:element.emailId};
            console.log("User detail Element : ",userShowDetails)
            return <UserList user={userShowDetails} loggedInUser={curBalance.contents.userEmail}></UserList>}))}
        </SearchBox>
      
    </div>
} 