import React, {useState,createContext , useContext} from "react";
import { Input } from "./input-fields";
import { ThemeContext } from "./context";



function App3(props){

    const [data,setData]=useState({
        username:"",
        email:""

    })
    let theme={
        // backgroundColor:"black",
        // color:"white",
        data,
        setData
    };
    return(
        <>
        <ThemeContext.Provider value={theme}>
            <Section/>
        </ThemeContext.Provider>
        </>
    )
}

export default App3;

function Section (){
    return(
        <section>
            <Form/>
        </section>
    )
}

function Form(){
    
    return(

    <form onSubmit={handleSubmit}>
        <Input type={"text"} id={"username"}/><br />
        <Input type={"text"} id={"email"}/><br />
        {/* <Input type={"text"}/><br /> */}
        <Input type={"submit"}/>
    </form>
    )
}