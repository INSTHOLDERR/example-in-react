import axios from 'axios';
import React, { useState,useEffect } from 'react';
    
function App(props){

    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


    const Register = ()=>{
        const response = axios.post('http://localhost:3000/register', {
            username,
            password,
        })
        console.log(response);
        response.then(res=>{
            if(res.status===200){
                alert("Register successful!")
               setUsername('');
               setPassword('');
            }
        })
    }

    return(
        <div>
    
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={Register}>Register</button>
      
    </div>
  );
    
}
// export default App