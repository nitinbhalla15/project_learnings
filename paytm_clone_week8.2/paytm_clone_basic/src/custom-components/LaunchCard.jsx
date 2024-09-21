export default function LaunchCard({children}){
    return <div className="flex justify-center h-screen item-center bg-slate-700">
    <div className="m-2 p-2 flex flex-col justify-center bg-black text-white rounded-2xl w-1/2">
       {children}
    </div> 
</div>
}