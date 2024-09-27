export default function CustomButton({ btnName, clickFunction ,isDisable}) {
    return <div className="">
        <div className={`${isDisable?`cursor-not-allowed`:` cursor-pointer`} p-4 m-2 mt-20 rounded-2xl flex justify-center '
        ${isDisable?`bg-red-600 text-white`:` bg-white text-black`}`}>
            <button disabled={isDisable} className={`${isDisable?`cursor-not-allowed`:` cursor-pointer`}`} 
            onClick={isDisable?null:clickFunction}>{btnName}</button>
        </div>
    </div>
}