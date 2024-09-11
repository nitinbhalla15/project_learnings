import { useRecoilValue } from "recoil";
import { profileDetailAtom } from "../atom-store/profileAtom";

export function ProfileAnalytics(){
    const profileAnalytics = useRecoilValue(profileDetailAtom);


    return <div className='flex justify-center p-5 border-t-2'>  
                
                <div className='flex flex-col justify-center ml-4'>
                    <div className=" flex font-bold justify-center">
                        {profileAnalytics.followerCount}
                    </div>
                    <div className="font-bold text-green-600">Followers</div>
                </div>

                <div className='flex flex-col justify-center ml-4'>
                    <div className=" flex font-bold justify-center">
                        {profileAnalytics.likesCount}
                    </div>
                    <div className="font-bold text-green-600">Likes</div>
                </div>

                <div className='flex flex-col justify-center ml-4'>
                    <div className=" flex font-bold justify-center">
                        {profileAnalytics.photos}
                    </div>
                    <div className="font-bold text-green-600">Photos</div>
                </div>
                
    </div>
}