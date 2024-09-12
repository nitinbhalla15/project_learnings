import { useRecoilValue } from "recoil";
import { birthdayName } from "../atom-store/profileAtom";

export function BirthdayCard(){
    const birthDayName = useRecoilValue(birthdayName)
    return <div className="flex flex-col justify-center h-screen items-center bg-red-700 bg-opacity-60" >
        <div className="flex flex-col justify-center p-5 m-4 bg-red-400 rounded-lg w-1/2 ">
            <div className="font-bold text-3xl flex justify-center  p-5 m-2">
                Happies BirthDay !!!!
            </div>
            <div className="p-3 m-2 bg-blue-500 rounded text-center cursor-pointer">
                {birthDayName}
            </div>
        </div>
    </div>
}