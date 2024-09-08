import { useRecoilValue } from "recoil"
import { countAtom } from "../Store/atoms"


export default function CountRenderer(){
    const countValue = useRecoilValue(countAtom)
    console.log("CountRendere -  re-render")
    return <div>
        {countValue}
        {countValue%2==0 ? <div>It is even</div> : <div>It is odd</div>}
    </div>
}