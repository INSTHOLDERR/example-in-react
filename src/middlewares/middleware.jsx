import { Navigate } from "react-router-dom";

function Mw({children}){

    let token = localStorage.getItem("token");

    if(token){
        return children;
    }
    return(<Navigate to={"/login"}/>)
}

export default Mw;
