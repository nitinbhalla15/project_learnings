export default function InputBox({title}){
    return <div className="m-2 p-2 flex flex-col">
        <div className="mt-4 text-xl">
            {title}
        </div>
        <div className="mt-4">
            <input className="rounded-xl w-full p-4" type="text" placeholder={`Enter your ${title}`}></input>
        </div>
    </div>
}