import React, { useContext } from "react"
import { CountContext } from "../Contexts/context";


const Buttons=React.memo(({setCount})=>{
    console.log("Buttons renders")
    // const setCount=useContext(CountContext)
    return <div>
        <button onClick={()=>{
            setCount((count)=>count+1)
        }} >Increament</button>
        <button onClick={()=>{
            setCount((count)=>count-1)
        }}>Decreament</button>
    </div>
});

export default Buttons