import { useRecoilState, useSetRecoilState } from "recoil"
import { countAtom } from "../Store/atoms"

export default function Buttons(){
    // const setCountAtom = useSetRecoilState(countAtom)
    const [count,setCountAtom] = useRecoilState(countAtom)
    console.log("Buttons re-render")
    return <div >
        <button style={{padding:'10px',margin:'2px'}} onClick={()=>{
            console.log("Button function render")
            setCountAtom(c=>c+1);
        }}>Increament</button>
        <button style={{padding:'10px',margin:'2px'}} onClick={()=>{
            setCountAtom(c=>c-1);
        }}>Decreament</button>
    </div>
}