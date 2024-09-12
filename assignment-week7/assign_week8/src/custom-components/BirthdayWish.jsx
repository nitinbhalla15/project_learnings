import { useSetRecoilState } from "recoil"
import { birthdayName } from "../atom-store/profileAtom"
import { useNavigate } from "react-router-dom";

export function BirthdayWish() {
    const setBirthdayName = useSetRecoilState(birthdayName)
    const navigation = useNavigate();
    let birthName;
    return <div className="flex flex-col justify-center h-screen items-center bg-red-700 bg-opacity-60" >
        <div className="flex flex-col justify-center p-5 m-4 bg-red-400 rounded-lg w-1/2 ">
            <div className="font-bold text-3xl flex justify-center  p-5 m-2">
                Enter Your Name
            </div>
            <div className="p-5 m-2 flex justify-center">
                <input className="p-5 w-full" onChange={(e) => {
                    birthName = e.target.value;
                }} type="text" placeholder="Enter your Name"></input>
            </div>
            <div className="p-3 m-2 bg-blue-500 rounded text-center cursor-pointer">
                <button onClick={() => {
                    setBirthdayName(birthName);
                    console.log("Navigating ...")
                    navigation("/birthdayWishes");
                }}>Done</button>
            </div>
        </div>
    </div>
}