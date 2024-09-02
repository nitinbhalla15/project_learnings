import { useState } from "react"


function App() {
  const [todos,setTodos] = useState([]);
  return <div>
    <TodoAdd todos={todos} setTodos={setTodos}></TodoAdd>
    {todos.map((todo)=>{
      return <TodoComp title={todo.title} description={todo.description}></TodoComp>
    })}
  </div>
}

function TodoAdd({todos,setTodos}){
  let todoTile;
  let todoDescription;
  return <div>
    <div>
      <input onInput={(event)=>{
        todoTile=event.target.value;
      }} type="text" placeholder="Enter the title"></input>
    </div>
    <div>
      <input onInput={(event)=>{
        todoDescription=event.target.value;
      }} type="text" placeholder="Enter the description"></input>
    </div>
    <div>
      <button onClick={()=>{
        const newTodo = {
          title:todoTile,
          description:todoDescription
        }
        console.log(newTodo)
        setTodos([...todos,newTodo])
      }}>Click here to add todo</button>
    </div>
  </div>
}

function TodoComp(props){
  return <div>
    <h3>{props.title}</h3>
    <h5>{props.description}</h5>
  </div>
}

function MyCustomButton(props){
  return <div>
    <button  onClick={()=>{
      props.setCount(props.count+1);
    }}>Counter {props.count}</button>
  </div>
}

export default App
