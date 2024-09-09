import { useRecoilValue } from "recoil";
import { profileAtom } from "../atom-store/profile-component-store";

export function ProfileComponent() {
    const profileInfo = useRecoilValue(profileAtom);
    console.log("Profile component render : ", profileInfo)
    return <div style={{ display: "flex",  justifyContent: 'center'}}>
        <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', margin: "4px", width: "50%", background: 'black', color: 'white', padding: '100px' ,borderRadius:'40px'}}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '4px' }}>
                    <div>{profileInfo.fullName}</div>
                    <div>{profileInfo.age}</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', padding: "10px" }}>{profileInfo.location}</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                <div>Followers : {profileInfo.followers}</div>
                <div>Likes : {profileInfo.likes}</div>
                <div>Photos : {profileInfo.photos}</div>
            </div>
        </div>
    </div>
}