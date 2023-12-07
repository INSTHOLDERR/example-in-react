import { Link } from "react-router-dom";

function Nav(){
 return(
    
    <>
    <h2>Navigation</h2>
    <span><Link to={"/"}>Home</Link></span>
    <span><Link to={"/about"}>About</Link></span>
    <span><Link to={"/contact-us"}>ContactUs</Link></span>
    <span><Link to={"/login"}>Login</Link></span>

    </>

 )
}
export default Nav;