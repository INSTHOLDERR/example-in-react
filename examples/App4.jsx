import React, { useState,useRef } from 'react';
import "./style.css"



function App() {
    

    const [input, setInput] = useState('');


    
       
        const Click = (value) => {
            if (value === '=') {
               
                setInput(eval(input).toString())
            } else if (value === 'C') {
                setInput('');
     
            } 
            // else if(value == 'backspace'){
               
            // }
            
            else {
                setInput(input + value);
            }
        }
        const Back = (value)=>{
            if(value=='backspace'){
                console.log(input);
                const inputValue = input.slice(0, -1);
                setInput(inputValue);
            }
        }
    
        return (
            <div className="calculator">
                <div className="display">
                    <input type="text" value={input} />
                    {/* <div className="result">{result}</div> */}
                </div>
                <div className="buttons">
                    <button onClick={() => Click('7')}>7</button>
                    <button onClick={() => Click('8')}>8</button>
                    <button onClick={() => Click('9')}>9</button>
                    <button onClick={() => Click('/')}>/</button>
    
                    <button onClick={() => Click('4')}>4</button>
                    <button onClick={() => Click('5')}>5</button>
                    <button onClick={() => Click('6')}>6</button>
                    <button onClick={() => Click('*')}>*</button>
    
                    <button onClick={() => Click('1')}>1</button>
                    <button onClick={() => Click('2')}>2</button>
                    <button onClick={() => Click('3')}>3</button>
                    <button onClick={() => Click('-')}>-</button>
    
                    <button onClick={() => Click('0')}>0</button>
                    <button onClick={() => Click('.')}>.</button>
                    <button onClick={() => Click('=')}>=</button>
                    <button onClick={() => Click('+')}>+</button>
    
                    <button onClick={() => Click('C')}>C</button>
                    <button onClick={() => Back('backspace')}>Back</button>
                </div>
            </div>
        );
    };


// export default App;

