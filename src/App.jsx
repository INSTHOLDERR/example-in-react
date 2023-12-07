import { BrowserRouter,Routes,Route } from "react-router-dom";

import Nav from "./navi";
import Home from "./home";
import About from "./about";
import ContactUs from "./contact-us";
import Login from "./login";
import Profile from "./profile";
import Mw from "./middlewares/middleware";



function App(){
    return(
        <BrowserRouter>
        <Nav/>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact-us" element={<ContactUs/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/profile" element={<Mw><Profile/></Mw>}/>
            <Route path="/*" element={<h1>PAGE NOT FOUND 404</h1>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default App;