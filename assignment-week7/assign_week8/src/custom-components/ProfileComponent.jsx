import React from "react"

export const ProfileComponent=React.memo(({children})=>{
    return <div className='flex flex-col justify-center bg-stone-600 w-1/3 rounded-md'>
            {children}
    </div>
})