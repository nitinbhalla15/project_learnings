import { atom, atomFamily, selector } from "recoil";
import { TODOS } from "../todo";

// export const todoListAtom = atom({
//     key:'todoListAtom1',
//     default:TODOS
// })

// export const todoFamilySingle = atom({
//     key:"todoFamilySingle",
//     default:{}
// })

// export const todoFamilSingleSelector = selector({
//     key:'todoFamilSingleSelector',
//     get:({get})=>{
//         return get(todoFamilySingle);
//     },
//     set:({set,get},newItem)=>{
//         console.log("hi")
//         const allTodo = get(todoListAtom);
//         const id =newItem;
//         const returnTodo = allTodo.find((item)=>item.id==id);
//         console.log("final todo",returnTodo)
//         set(todoFamilySingle,returnTodo)
//     }
// })


export const todo = atomFamily({
    key:'todo',
    default: id=>{
        return TODOS.find((item)=>item.id==id);
    }
})