import { useRecoilValue } from "recoil";
import { profileDetailAtom } from "../atom-store/profileAtom";

export function ProfileInfo() {
    const profileInfo = useRecoilValue(profileDetailAtom)

    return <div className='flex flex-col justify-center p-5 m-5'>
        <div className="flex justify-center">
            <img src="../../wp12100663-coding-pc-4k-wallpapers.png" className="w-24 h-24 rounded-full"></img>
        </div>
        <div className="flex flex-col justify-center">
            <div className="flex justify-center">
                <div className="font-bold">
                    {profileInfo.fullName}
                </div>
                <div className="font-light ml-3">
                    {profileInfo.age}
                </div>
            </div >
            <div className="font-bold flex justify-center">{profileInfo.location}</div>
        </div>
    </div>
}