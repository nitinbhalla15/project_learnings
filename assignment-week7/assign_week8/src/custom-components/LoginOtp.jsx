import { useRef, useState } from "react";

export function LoginOtp() {
    const [isSendClicked,setSendClicked] = useState(false);
    const firstNum = useRef();
    const secondNum = useRef();
    const thirdNum = useRef();
    const fourthNum = useRef();
    return <div className="flex flex-col justify-center h-screen items-center rounded">
        <div className="flex flex-col justify-center w-1/2 bg-slate-400 p-10 rounded-md">
            <div className="flex justify-center  m-2">
                Login Via OTP
            </div>
            {!isSendClicked && <div className="flex justify-center">
                <input className="w-full p-2 bg-blue-200 m-2" type="text" placeholder="Enter your mobile number"></input>
            </div>}

            {isSendClicked && <div className="flex justify-around">
                <div>
                    <input onChange={()=>{
                        secondNum.current.focus();
                    }} ref={firstNum} className="w-1/2 p-2 bg-blue-200 m-2" type="text"></input>
                </div>

                <div>
                    <input onChange={()=>{
                        thirdNum.current.focus();
                    }} ref={secondNum} className="w-1/2  p-2 bg-blue-200 m-2" type="text" ></input>
                </div>

                <div>
                    <input onChange={()=>{
                        fourthNum.current.focus();
                    }} ref={thirdNum} className="w-1/2  p-2 bg-blue-200 m-2" type="text" ></input>
                </div>

                <div>
                    <input ref={fourthNum} className="w-1/2  p-2 bg-blue-200 m-2" type="text" ></input>
                </div>
            </div>}

            <div className="flex justify-center p-3 bg-blue-300 rounded m-2">
                <button onClick={() => {
                    console.log("clicked")
                    setSendClicked(true);
                }}>Send OTP</button>
            </div>
        </div>
    </div>

}