import { useRecoilValue } from "recoil";
import { filteredTodoAtoms } from "../Store/todoAtoms";

export function FilterTodo(){
    const todoList=useRecoilValue(filteredTodoAtoms);
    // const todoList = todoListF[0];
    return<div style={{display:"flex",flexDirection:'column',width:'50%',alignItems:'center'}}>
        <h1>FILTTERED TODO LIST</h1>
        {todoList.map((todoItem)=>{
            return <div style={{padding:'5px',margin:'2px'}}>
                    <h3>{todoItem.title}</h3>
                    <h5>{todoItem.description}</h5>
                </div>
        })}

    </div>
}