import { useNavigate } from "react-router-dom";

export default function TopBar(){
    const navigate = useNavigate();

    return <div style={{display:"flex",flexDirection:"row"}}>
        <button style={{padding:"10px"}} onClick={()=>{
            navigate("/");
        }}>Landing Page</button>
        <button style={{padding:"10px"}} onClick={()=>{
            navigate("/dashboard");
        }}>Dashboard Page</button>
    </div>
}