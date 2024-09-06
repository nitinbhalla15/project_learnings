import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
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

// function App(){
//   const [count,setCount] = useState(0);
//   var a= useCallback(()=>{
    
//   },[]);
//   return <div>
//     <Todo a={a}></Todo>
//     <button onClick={()=>{
//       // a++;
//       setCount(count+1);
//     }}>Counter {count}</button>
//   </div>
// } 


// const Todo = React.memo(({a})=>{
//   console.log("Todo component rerenders");
//   return <div>
//     Hi There from the component
//   </div>
// })


// function App(){
//   const [exchange1Data,setExchange1Data] = useState({});
//   const [exchange2Data,setExchange2Data] = useState({});
//   const [bankData,setBankData] = useState({});
//   console.log("Parent rerendering ...")
//   useEffect(()=>{
//     setExchange1Data({returns:100});
//   },[])
//   useEffect(()=>{
//     setExchange2Data({returns:100});
//   },[])
//   useEffect(()=>{
//     setTimeout(()=>{
//       setBankData({returns:100});
//     },5000)
//   },[])
//   const myFunction = useCallback(()=>{()=>{
//     return exchange1Data.returns + exchange2Data.returns;
//   }},[])
 

//   return <div>
//     <MyCutom myFunction={myFunction}></MyCutom>
//     <MyCutom2></MyCutom2>
//   </div>
// }

// const MyCutom = React.memo(({myFunction})=>{
//   console.log("My custom rerenders");
//   return <div>
//     Hi there
//   </div> 
// })

// const MyCutom2 = React.memo(()=>{
//   console.log("My Custom 2 rerenders")
//   return <div>
//     Hi there
//   </div>
// })

function App(){
  const divRef = useRef();
  const firstName = "Nitin";
  console.log("App rerenders")
  useEffect(()=>{
    setTimeout(()=>{
      divRef.current.innerHTML="Sneha";
    },5000)
  },[])

  return <div>
    Hi There
    <div ref={divRef}>{firstName}</div>
  </div>
}



export default App
