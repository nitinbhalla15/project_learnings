import { useRecoilValue } from "recoil"
import { ErrorAtom } from "../recoil-state-store/ErrorAtom"

export default function ErrorComponent({ children }) {
    const getAllErrors = useRecoilValue(ErrorAtom);
    return (<>
        {children}
        {getAllErrors != undefined && (
            <div className="w-1/3 fixed top-4 right-4 bg-red-400 font-bold p-10 m-4 rounded-md shadow-lg">
                <div className="text-4xl">Error !!</div>
                {Object.keys(getAllErrors).map(key=>{
                    // <div>
                     return  <div className="uppercase text-2xl">{key} : {getAllErrors[key]}</div> 
                    // </div>
                })}
            </div>)}
    </>)
}