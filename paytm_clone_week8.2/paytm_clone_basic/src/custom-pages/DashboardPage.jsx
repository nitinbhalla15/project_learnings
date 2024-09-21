import BalanceComponent from "../custom-components/BalanceComponent";
import InputBox from "../custom-components/InputBox";
import TopBar from "../custom-components/TopBar";

export default function DashboardPage(){
    return <div className="bg-slate-700 h-screen">
        <TopBar username={"Nitin"}></TopBar>
        <BalanceComponent currentBalance={3000}></BalanceComponent>
        <InputBox title={"Search Friends -> Transfer Money"}></InputBox>
    </div>
} 