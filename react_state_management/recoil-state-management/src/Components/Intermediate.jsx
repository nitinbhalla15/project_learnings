import Buttons from "./Buttons";
import CountRenderer from "./CountRenderer";

export default function Intermediate(){
    console.log("Intermediate RErender")
    return <>
        This is intermediate Component
        <CountRenderer></CountRenderer>
        <Buttons></Buttons>
    </>
}