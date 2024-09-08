import { useSetRecoilState } from "recoil"
import { filteredTodoAtoms } from "../Store/todoAtoms"

let clock;

export default function TodoSearchBar(){
    const setFilterAtom = useSetRecoilState(filteredTodoAtoms);

    return <div style={{display:'flex',flexDirection:'column',justifyContent:'center',margin:"5px",width:'50%'}}>
        <h1>FILTER TODO</h1>
        <input onChange={(event)=>{
            clearTimeout(clock);
            clock=setTimeout(()=>{
                setFilterAtom(event.target.value);
            },300)
        }} style={{margin:"2px",padding:"5px",width:'100%'}} type="text" placeholder="Enter keyword to search TODO(s)"></input>

    </div>
}