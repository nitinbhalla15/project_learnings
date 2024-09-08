import { useContext } from "react"
import { CountContext } from "../Contexts/context"

export default function Count(){
    console.log("count renders")
    const count = useContext(CountContext)
    return <div>
        {count}
    </div>
}