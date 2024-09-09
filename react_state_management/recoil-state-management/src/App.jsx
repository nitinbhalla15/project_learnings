import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Intermediate from './Components/Intermediate'
import { RecoilRoot, useRecoilState, useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from 'recoil'
import TodoSubmittion from './Components/TodoSubmittion'
import TodoSearchBar from './Components/TodoSearchBar'
import TodoRender from './Components/TodoRender'
import { FilteredComponent } from './Components/FilteredTodos'
import { AllTodoComponent } from './Components/AllTodoComponent'
import { notificationAtom} from './Store/recoilPractise'
import { todo } from './Store/recoilFamily'

// function App() {
//   console.log("App re-renders")
//   return <>
//     <RecoilRoot>
//       <div style={{ display: 'flex' }}>
//         <AllTodoComponent></AllTodoComponent>
//         <FilteredComponent></FilteredComponent>
//       </div>
//     </RecoilRoot>
//   </>
// }

function App() {
  const notifications = useRecoilValueLoadable(notificationAtom);
  // useEffect(()=>{
  //     fetch("http://localhost:8080/calculate/notification")
  //     .then(async (res)=>{
  //       const finalResponse = await res.json();
  //       console.log("final respoinse : ",finalResponse)
  //       setNotification(finalResponse)
  //     })
  // },[])
  if(notifications.state=="loading"){
    return <div>
        Loading....
    </div>
  }
  return <>
    <button>Home</button>

    <button>My Networks  ({notifications.contents.ntiCount > 100 ? "99+" : notifications.contents.ntiCount})</button>
    <button>Jobs ({notifications.contents.jobsCnt})</button>
    <button>Messages ({notifications.contents.msgCnt})</button>
    <button>Notifications ({notifications.contents.notCnt})</button>

    <button>Me</button>
  </>
}


// function App(){
//   return <div>
//     <Todo id={1}></Todo>
//     <Todo id={2}></Todo>
//     <Todo id={2}></Todo>
//     <Todo id={3}></Todo>
//     <Todo id={4}></Todo>
//     <Todo id={5}></Todo>
//     <Todo id={4}></Todo>
//     <Update></Update>
//   </div>
// }

// function Update({id}){
//   const setTodo = useSetRecoilState(todo(2));
//   useEffect(()=>{
//     setTimeout(()=>{
//       setTodo({
//         id:2,
//         title:"Random todo",
//         description:"random description"
//       })
//     },3000);
//   },[])
// }

// function Update({id}){
//   const setTodo = useSetRecoilState(todoFamilSingleSelector);
//   setTodo(1)
// }


// function Todo({id}){
//   const finalTodo = useRecoilValue(todo(id));
//   // const [finalTodo,setFinalTodo] = useRecoilState(todoFamilSingleSelector);
//   // setFinalTodo(id);
//   return <div>
//     {finalTodo.title} : {finalTodo.description}
//   </div>
// }

export default App
