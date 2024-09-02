import { useState } from "react";
import { Header } from "./Header";

export function HeaderWithButton(){
    const [title,setTitle] = useState("Nitin");

    return <div>
        <button onClick={()=>{
            setTitle(Math.random()*10)
        }}>Click me to change the title</button>
        <Header title={title} setTitle={setTitle}></Header>
    </div>
}