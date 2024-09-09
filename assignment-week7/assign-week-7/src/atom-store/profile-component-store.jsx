import { atom } from "recoil";
import { profileDetails } from "../util-store/profile-util";

export const profileAtom = atom({
    key:"profileAtom",
    default:profileDetails
})