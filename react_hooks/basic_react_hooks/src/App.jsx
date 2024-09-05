import React, { useCallback, useEffect, useState } from "react"
// let clock;
// function App(){
  
//   const [todo,setTodos] = useState({title:"temp",description:"temp"});
//   const [todoId,setTodoId] = useState(2);
//   useEffect(()=>{
//     clearTimeout(clock);
//     clock =  setTimeout(()=>{
//       fetch(`http://localhost:8080/calculate/fetchTodo/${todoId}`)
//       .then(async (res)=>{
//         const finalResponse = await res.json();
//         console.log("final response : ",finalResponse)
//         setTodos(finalResponse);
//       })
//     },300)
//   },[todoId])

//   return <div>
//     <input onChange={(event)=>{
//       console.log("Event: ",event)
//       const value = event.target.value;
//       if(value!="" && value!=undefined && value!=null){
//         setTodoId(parseInt(value));
//       }
//     }} type="text" placeholder="Enter the id to fetch the respective todo"></input>
    
//     <Todo title={todo.title} description={todo.description}></Todo>
      
//   </div>
// }

// function Todo({title,description}){
//   return <div>
//     <h1>{title}</h1>
//     <h4>{description}</h4>
//   </div>
// }

function App(){
  const [count,setCount] = useState(0);
  var a= useCallback(()=>{
    return {}
  },[count]);
  return <div>
    <Todo a={a}></Todo>
    <button onClick={()=>{
      // a++;
      setCount(count+1);
    }}>Counter {count}</button>
  </div>
} 


const Todo = React.memo(({a})=>{
  console.log("Todo component rerenders");
  return <div>
    Hi There from the component
  </div>
})
export default App
