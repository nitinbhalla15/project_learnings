import Buttons from "./Buttons";
import Count from "./Count";

export default function CountRender({setCount}){
    return <>

        <Count></Count>
        <Buttons setCount={setCount}></Buttons>
    
    </>
}