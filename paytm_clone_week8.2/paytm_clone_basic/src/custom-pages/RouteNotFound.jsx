import { useNavigate } from "react-router-dom";
import LaunchCard from "../custom-components/LaunchCard";

export default function RouteNotFound() {
    const navigate = useNavigate();
    return <LaunchCard>
        <div className="flex justify-center text-4xl">ROUTE NOT FOUND :(</div>
        <div className="flex justify-center my-10 text-4xl">
            <div>Haven't registered yet ? Go To </div>
            <button className="bg-white text-black rounded-xl px-4 mx-3 py-3" onClick={() => {
                navigate("/sign-up")
            }}>Sign-Up Page</button>
        </div>
        <div className="flex justify-center my-3 text-4xl">
            <div>Already a User ? Go To </div>
            <button className="bg-white text-black rounded-xl px-4 mx-3 py-3" onClick={() => {
                navigate("/sign-in")
            }}>Sign-In Page</button>
        </div>
    </LaunchCard>
}