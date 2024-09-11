import { useRecoilValue } from "recoil"
import { bckGroundColour } from "../atom-store/profileAtom"
import { ProfileComponent } from "./ProfileComponent"
import { BackgroundChanger } from "./BackGroundChanger"
import { ProfileInfo } from "./ProfileInfo"
import { ProfileAnalytics } from "./ProfileAnalytics"

export function Question1() {
    const bckGroundColor = useRecoilValue(bckGroundColour)
    return <div className={`flex flex-col justify-center h-screen items-center ${bckGroundColor}`}>
        <ProfileComponent >
            <ProfileInfo></ProfileInfo>
            <ProfileAnalytics></ProfileAnalytics>
        </ProfileComponent>
        <BackgroundChanger></BackgroundChanger>
    </div>
}