import { atom, selector } from "recoil";


export const allTodos = atom({
    key:"allTodos",
    default:[]
})

export const filterTodos = atom({
    key:'filterTodos',
    default:[]
})

export const allTodoListAtom = selector({
    key:"allTodoListAtom",
    get:({get})=>{
        const currentTodoList = get(allTodos);
        return currentTodoList;
    },
    set:({get,set},newItem)=>{
        console.log("new item : ",newItem)
        const currentTodoList = get(allTodos);
        const newTodoList = [...currentTodoList,newItem];
        set(allTodos,newTodoList)
    }
})

export const filteredTodoAtoms = selector({
    key:'filteredTodoAtoms',
    get:({get})=>{
        const filterList = get(filterTodos);
        return filterList;
    },
    set:({get,set},newItem)=>{
        const allTodoList = get(allTodoListAtom);
        console.log("new item : ",newItem)
        const newFilterList = allTodoList.filter((item)=>item.title.includes(newItem) || item.description.includes(newItem));
        if(newItem==null || newItem==""){
            set(filterTodos,[]);
            return;
        }
        console.log("new filter list : ",newFilterList);
        set(filterTodos,newFilterList);
    }
})


