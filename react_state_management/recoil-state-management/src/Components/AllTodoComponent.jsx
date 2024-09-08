import TodoRender from "./TodoRender";
import TodoSubmittion from "./TodoSubmittion";

export function AllTodoComponent(){
    return <div style={{display:"flex",width:'50%'}}>

        <TodoSubmittion></TodoSubmittion>
        <TodoRender></TodoRender>
    </div>
}