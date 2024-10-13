import React, { useEffect, useState } from 'react'
import './App.css'

function useIsOnline(){
  const [isOnline,setIsOnline] = useState(window.navigator.onLine);

 useEffect(()=>{
    window.addEventListener('online',()=>{
      setIsOnline(true);
    })

    window.addEventListener('offline',()=>{
      setIsOnline(false);
    })
    return ()=>{
      window.removeEventListener("online");
      window.removeEventListener("offline");
    }
 },[])

  return isOnline;

}

function useMousePointer(){
  const [currentPosition,setCurrentPosition] = useState({x:0,y:0});

  useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
      setCurrentPosition({x:e.clientX,y:e.clientY});
    })
    return ()=>{
      window.removeEventListener("mousemove")
    }
  },[])
  return currentPosition
}

function useInterval(fnTocall,time){
  useEffect(()=>{
    setInterval(fnTocall,time)
  },[])
}

function useDebounce(inpValue,debouncedTime){
  const [debouncedValue,setDebouncedValue] = useState(inpValue);
  useEffect(()=>{
    const clock = setTimeout(()=>{
      setDebouncedValue(inpValue)
    },debouncedTime)
    return ()=>{
      clearTimeout(clock);
    }
  },[inpValue])
  return debouncedValue;
}

function App() {
  // const isOnline = useIsOnline();
  // if(isOnline){
  //   return "Yay i am online";
  // }else{
  //   return "NOoooo i am offline";
  // }
  // const mousePosition = useMousePointer();

  // return <div>Your cursor is at {`${mousePosition.x} ${mousePosition.y}`}</div>
  // const [count,setCount] = useState(0);

  // useInterval(()=>{
  //   setCount(c=>c+1);
  // },1000);

  // return <div>counter is at {count}</div>
  const [inpValue,setInpValue] = useState('');
  const debouncedValue = useDebounce(inpValue,500);

  return <div>
    <input style={{"padding":'40px','width':'100%'}} type='text' onChange={(e)=>{
      setInpValue(e.target.value)
    }} placeholder='Search ...'></input>
    <div>Hitting backend call for debounced value : {debouncedValue}</div>
  </div>
}


// ----------Functional Compoent

// function MyComponent(){
//   const [count,setCount] = useState(0);  
//   return (
//     <>
//       <p>{count}</p>
//       <button onClick={()=>{
//         setCount(count+1)
//       }}>Inc Count</button>
//     </>
//   )
// }


// ---------Class Based Component

// class MyComponent extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {count:0};
//   }

//   render(){
//     return (
//           <>
//             <p>{this.state.count}</p>
//             <button onClick={()=>{
//               this.setState({count:this.state.count+1});
//             }}>Increament Count</button>
//           </>
//         )
//   }

// }


// ------LifeCycle Events 

// function useTodos(n){
//   const [todos,setTodos] = useState([]);
//   const [loading,setLoading] = useState(true);
//   useEffect(()=>{
//     const clock = setInterval(()=>{
//       fetch("http://localhost:8080/auth/getTodos")
//       .then(async(res)=>{
//         const response = await res.json();
//         setTodos(response.response);
//         setLoading(v => !v);
//       })
//     },n*1000)
//     return ()=>{
//       clearInterval(clock);
//     }
//   },[])

//   return {todos,loading};
// } 

// function MyComponent(){
//   const {todos,loading} = useTodos(5);

//   if(loading){
//     return <div>Loading...</div>
//   }

//   return <div>
//     {todos.map(todoItem=>{
//       return <div>
//         {todoItem}
//         </div>
//     })}
//   </div>
// }


export default App
