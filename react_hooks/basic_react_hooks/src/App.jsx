import { useEffect, useState } from 'react'
import { Header } from './custom-components/Header'
import { HeaderWithButton } from './custom-components/HeaderWithButton'

// let globalId = 4;

// function App() {
//   const [todos,setTodos] = useState([{id:1,title:"Nitin",description:"Nitin1"},
//     {id:2,title:"Sneha",description:"Sneha1"},
//     {id:3,title:"Anshul",description:"Anshul1"}
//   ]);

//   return <div>
//       <button onClick={()=>{
//         setTodos([...todos,{id:globalId++,title:"Another Title",description:"Another Description"}]);
//       }}>Click me to add todos</button>
//       {todos.map((todo)=>{
//         return <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>
//       })}
//   </div>
// }

// function Todo({title,description}){
//   return <div>
//     <h1>{title}</h1>
//     <h3>{description}</h3>
//   </div>
// }



function App(){
  const [count,setCount] = useState(0);
  useEffect(()=>{
    console.log("use effect called")
    alert("Hi there the component mounted for the very first time")
  },[])
  {console.log("Component rerendered")}
  return <div>
    <Component><button onClick={()=>{
      setCount(count+1);
    }}>Counter {count}</button></Component>
    <Component>hI there from nitin</Component>
    <Component>Hi there from sneha</Component>
  </div>
}

function TextComponent(){
  return <div>
    Hi there
  </div>
}


function Component({children}){
  return <div style={{border:'2px solid black'}}>
    {children}
  </div>
}

export default App
