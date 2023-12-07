import React, { useState, useEffect, useRef ,useMemo ,useCallback} from "react";
import './style.css'
// import SCmp from "./sComponent";
 

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            // count: 0,
            // todo: []
            products: []
        }
    }

    // handleIncrement = () => {
    //     this.setState(state => ({
    //         count: state.count + 1
    //     }));
    // } 

    shouldComponentUpdate(p, s) {
        console.log(p, s);
        console.log("should component update");
        // if(this.)
        // console.log();
        return true;
    }

    // handleDecrement = () => {
    //     this.setState(state => ({
    //         count: state.count - 1
    //     }));
    // }

    componentDidMount() {
        console.log("component did mount");

        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({ products: data.products })
            })
    }

    componentDidUpdate() {
        console.log("component did update");
    }

    // shouldComponentUpdate(p, s) {
    //     console.log(p, s);
    //     console.log("should component update");
    //     return true;
    // }

    render() {

        const style = {
            display: "flex",
            height: "8rem"
        }

        return (
            <>
                {/* <div>
                    <h1>Counter: {this.state.count}</h1>

                    <button onClick={this.handleDecrement}>-</button>
                    <button onClick={this.handleIncrement}>+</button>
                    
                </div> */}

                {
                    this.state.products.map((item, index) => (
                        <React.Fragment key={index}>
                            <img src={item.thumbnail} alt="product" loading="lazy" />
                            <h3>{item.title}sd</h3>
                            <p>{item.description}</p>
                            <div style={style}>
                                {item.images.map((img, ind) => (
                                    <img src={img} key={ind} loading="lazy" />
                                ))}
                            </div>
                            <br />
                        </React.Fragment>

                    ))
                }
            </>
        )
    }
}





function App2(props) {
    // console.log(props);
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    // const [product, setProducts] = useState(null)
    // const listRef = useRef(null)

    // const calc = () =>{
    //     console.log("calculation");
    //     return "result"
    // }
    

//     let result = useMemo(calc,[])
// console.log(result);

    const inc =()=>{
        setCount(count+1)
    }

    const cb = useCallback(inc,[count])
    // fetch("https://dummyjson.com/products")
    // .then(res =>res.json())
    // .then(data =>{
    //     console.log(data);
    // })
    // useEffect(() => {
    //     fetch("https://dummyjson.com/products")
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setProducts(data.products)
    //             console.log("producs", product);

    //         })
    //         console.log(listRef.current);
    // }, [])
    return (
        <>

        <SCmp count={count} inc={cb}/>
            <h1>hello 1{count}</h1>
        <button onClick={()=> setCount(count -1)}>-</button>
        <button onClick={()=> setCount(count +1)}>+</button>


        <h1>hello 1{count2}</h1>
         <button onClick={()=> setCount(count2 -1)}>-</button>
        <button onClick={()=> setCount(count2 +1)}>+</button>

            {/* <div id="list" ref={listRef}></div> */}



            {/* {
                product?.map((item, index) => (
                    <HCmp key={index}>
                    <div>
                        {item.title}
                    </div>
                </HCmp>     
                    // <React.Fragment key={index}>
                    //     <img src={item.thumbnail} alt="product" loading="lazy" />
                    //     <h3>{item.title}sd</h3>
                    //     <p>{item.description}</p>
                    //     <div>
                    //         {item.images.map((img, ind) => (
                    //             <img src={img} key={ind} loading="lazy" />
                    //         ))}
                    //     </div>
                    //     <br />
                    // </React.Fragment>

                ))
            } */}



        </>
    )
}






const Stopwatch = () => {
 
  const [time, setTime] = useState(0);

  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
 
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);


  const hours = Math.floor(time / 360000);


  const minutes = Math.floor((time % 360000) / 6000);


  const seconds = Math.floor((time % 6000) / 100);

  
  const milliseconds = time % 100;

  const startAndStop = () => {
    setIsRunning(!isRunning);
  };


  const reset = () => {https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories#cloning-with-https-urls
    setTime(0);
  };
  return (
    <div className="stopwatch-container">
      <p className="stopwatch-time">
        {hours}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
      </p>
      <div className="stopwatch-buttons">
        <button className="stopwatch-button" onClick={startAndStop}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button className="stopwatch-button" onClick={reset}>
           
        </button>
      </div>
    </div>
  );
};

// export default Stopwatch;

// function HCmp({ children }) {
//     return (
//         <h1>{children}</h1>
//     )
// }