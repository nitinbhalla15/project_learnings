import { useRecoilValue } from "recoil";
import {  allTodoListAtom } from "../Store/todoAtoms";

export default function TodoRender(){
    const todoList=useRecoilValue(allTodoListAtom);
    // const todoList = useRecoilValue(allTodos)

    return<div style={{display:"flex",flexDirection:'column',width:'50%',alignItems:'center'}}>
        <h1>ALL TODO LIST</h1>
        {todoList.map((todoItem)=>{
            return <div style={{padding:'5px',margin:'2px'}}>
                    <h3>{todoItem.title}</h3>
                    <h5>{todoItem.description}</h5>
                </div>
        })}

    </div>
}