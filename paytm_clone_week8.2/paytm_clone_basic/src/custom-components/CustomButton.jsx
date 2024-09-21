export default function CustomButton({ btnName, clickFunction }) {
    return <div className="">
        <div className="cursor-pointer p-4 m-2 mt-20 rounded-2xl flex justify-center bg-white text-black">
            <button className="cursor-pointer" onClick={clickFunction}>{btnName}</button>
        </div>
    </div>
}