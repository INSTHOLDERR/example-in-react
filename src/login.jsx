import { useNavigate } from "react-router-dom";

function Login(){
    const navigate =useNavigate();
    const login=()=>{
        localStorage.setItem("token","asdfghjkl");
        navigate("/profile");
    }
    return(
        <div>
            <h3>Login</h3>
            <form>
                <input type="text" name="username" id="username" placeholder="username"/>
                <input type="password" name="password" id="password" placeholder="password"/>
                <button onClick={login} type="button">Login</button>
            </form>
        </div>
    )
}

export default Login;