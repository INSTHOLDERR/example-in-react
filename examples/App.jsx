// import React from "react";
// import './style.css'

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             count: 0,
//             todo: []
//         }
//     }

//     clickHandler = (event) => {
//         // event.preventDefault();
//         // let todo = event.target[0].value;
//         // this.setState({ todo: [...this.state.todo, todo] });
//         // event.target[0].value = '';
//     }

//     delete = (index) => {
    
//         this.setState({
//             todo: this.state.todo.filter((item, i) => i !== index)
//         });
//     }

//     update = (index) => {
      
//         const newText = prompt("Enter the new text:");
//         if (newText) {
//             const updated = [...this.state.todo];
//             updated[index] = newText;
//             this.setState({ todo: updated });
//         }
//     }

//     componentDidMount(){
//         console.log("componenet did mount");
//     }
//     componentDidUpdate(){
//         console.log("component did update");
//     }
//     shouldComponentUpdate(p,s){
//         console.log(p,s);
//         console.log("should component update");
//         return true;
//     }
//     render() {
//         return (
//             <>
//                 {/* <form onSubmit={this.clickHandler}>
//                     <input type="text" name="todo" id="todo" />
//                     <input type="submit" value="add" />
//                 </form>

//                 <ol>
//                     {this.state.todo.map((item, index) => (
//                         <li key={index}>
//                             {item}
//                             <button onClick={() => this.delete(index)}>Delete</button>
                            
//                             <button onClick={() => this.update(index)}>Update</button>
//                         </li>
//                     ))}
//                 </ol> */}


//             </>
//         )
//     }
// }

// export default App;
