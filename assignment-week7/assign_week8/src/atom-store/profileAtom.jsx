import { atom, selector } from "recoil";
import { PROFILE_DETAILS } from "../profileDetails";
import { COLOUR_DETAILS } from "../colourDetails";
// import {profileDetails}  from "./profileDetails"

export const profileDetailAtom = atom({
    key:"profileDetailAtom",
    default: PROFILE_DETAILS
})

export const buttonColor = atom({
    key:'buttonColor',
    default:COLOUR_DETAILS
})

export const bckGroundColour = atom({
    key:'bckGroundColour',
    default:'bg-white-400'
})

export const paralength = atom({
    key:'paralength',
    default:0
})

export const paraSelector = selector({
    key:'paraSelector',
    get:({get})=>{
        const a = get(paralength)
        console.log(a);
        let paragraph = "";
        for(let i =0;i<a;i++){
            paragraph+="nitin "
        }
        return paragraph
    }
})

export const birthdayName = atom({
    key:'birthdayName',
    default:""
})