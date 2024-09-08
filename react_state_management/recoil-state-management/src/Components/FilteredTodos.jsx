import { FilterTodo } from "./FilterTodoRender";
import TodoRender from "./TodoRender";
import TodoSearchBar from "./TodoSearchBar";

export function FilteredComponent() {
    return <div style={{display:'flex',width: '50%'}}>
        <TodoSearchBar></TodoSearchBar>
        <FilterTodo></FilterTodo>
    </div>
}