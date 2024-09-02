// export function Header({title}){
//     {console.log("Re-Rendered -> ",title)}
//     return <div>
//         <h1>My name is {title}</h1>
//     </div>

import React from "react"


export const Header = React.memo(({title})=>{
    {console.log("Re-rendered -> ",title )}
    return <div>
        <h3>{title}</h3>
    </div>
})