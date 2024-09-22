export default function InputBox({title,boxtype}){
    return <div className="m-2 p-4 flex flex-col">
        <div className="mt-4 text-xl font-bold">
            {title}
        </div>
        <div className="mt-4 text-black">
            <input className="rounded-xl w-full p-4" type={`${boxtype}`} placeholder={`Enter your ${title}`}></input>
        </div>
    </div>
}