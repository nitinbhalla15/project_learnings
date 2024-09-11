import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { paralength, paraSelector } from "../atom-store/profileAtom";

export function ParaGenerator() {
    const setParaLen = useSetRecoilState(paralength)
    const newPara = useRecoilValue(paraSelector)
    let paragraphLength = 0;
    return <div className="flex flex-col justify-center m-5 p-5">
        <div className="flex justify-center font-bold text-4xl">Para Generator</div>
        <div className="flex justify-center m-10 ">
            <div className=" w-full">
                <input onChange={(e)=>{
                    paragraphLength=(parseInt(e.target.value))
                }} className="bg-slate-200 w-full p-5" type="text" placeholder="Enter Number of Words"></input>
            </div>
            <button onClick={()=>{
                setParaLen(paragraphLength)
            }} className="ml-2 p-5 rounded bg-black text-white ">Generate</button>
        </div>
        <div className="flex justify-center font-bold text-4xl">
            {newPara}
        </div>
    </div>
}