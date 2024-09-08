import { useSetRecoilState } from "recoil"
import {  allTodoListAtom} from "../Store/todoAtoms"

export default function TodoSubmittion(){
    console.log("TodoSubmittion renders...")
    const setTodoList = useSetRecoilState(allTodoListAtom)
    let todoTitle;
    let todoDescription;
    let isTodoAdded=false;
    return <div style={{margin:"5px",display:'flex',flexDirection:'column',width:'50%'}}>
        <h1>TODO SUBMITION </h1>
        <input onChange={(event)=>{
            todoTitle=event.target.value;
        }} style={{margin:"2px",padding:"5px"}} type="text" placeholder="TITLE"></input>
        <input onChange={(event)=>{
            todoDescription=event.target.value;
        }} style={{margin:"2px",padding:"5px"}} type="text" placeholder="DESCRIPTION"></input>
        <button style={{margin:"2px",padding:"5px"}} onClick={()=>{
            let todoValue = {title:todoTitle,description:todoDescription}
            if(todoTitle!=undefined && todoDescription!=undefined){
                setTodoList(todoValue)
                isTodoAdded=true;
                setTimeout(() => {
                    isTodoAdded=false;
                }, 3000);
            }
        }}>Click here to submit Todo</button>
        {isTodoAdded && <div>TODO ADDED SUCCESSFULLY</div>}
    </div>

}