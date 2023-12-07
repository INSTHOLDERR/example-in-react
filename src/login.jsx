
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login(){

 
   

    const navigate =useNavigate();
    const logg=(event)=>{

        let username = document.getElementById("username");
        let password = document.getElementById("password");
    
        event.preventDefault();

        console.log(username.value);
        console.log(password.value);


        const response = axios.post('http://localhost:3000/login',{
            username:username.value,
        password:password.value
            })

       
        response.then(res=>{
            alert(res.data.msg);
            localStorage.setItem("token", res.data.token);
            navigate("/profile");

        })
        .catch(error =>{
            console.log(error);
        })


     
        
    }
    return(
        <div>
            <h3>Login</h3>
            <form>
                <input type="text" name="username" id="username" placeholder="username"/>
                <input type="password" name="password" id="password" placeholder="password"/>
                <button onClick={logg} type="button">Login</button>
            </form>
        </div>
    )
}

export default Login;