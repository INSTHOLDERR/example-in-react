import { useNavigate } from "react-router-dom";
 
 function Profile(){
    const navigate= useNavigate()

    function logout(){
        localStorage.removeItem("token")
        navigate("/login");
    }
    return(
        <>  
        <h2>Profile</h2>
        <button onClick={logout}>Logout</button>
        </>
    )
}

export default Profile;