import { useRecoilValue, useSetRecoilState } from "recoil"
import { bckGroundColour, buttonColor } from "../atom-store/profileAtom"

export function BackgroundChanger(){
    const buttonsWithColours = useRecoilValue(buttonColor)
    const setBackGroundColour = useSetRecoilState(bckGroundColour)
    return <div className="flex justify-around">
            
        {buttonsWithColours.map((item)=>{
            return <div className={`${item.colour} m-5 p-2 rounded`}>
                     <button onClick={()=>{
                        setBackGroundColour(item.colour)
                     }}>{item.text}</button>   
                </div>
        })}

    </div>
}