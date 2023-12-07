import { memo } from "react";
function child(props){
    return(
        <>
         <h2>Second component {props.count}</h2>
         <button onClick={props.inc}>+</button>
        </>
       
    )
}
export default memo(child);