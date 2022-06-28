import React, {useState} from "react";

const Counter = function () {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    } 
    
    function dicrement() {
        if(count >= 1) {
            setCount(count - 1)
        } else {
            return
        }
    }

    return (
        <div>
           <h1>{count}</h1> 
           <button className="button_increment" onClick={increment}>increment</button>
           <button className="button_dicrement" onClick={dicrement}>dicrement</button>
        </div>
    )
}

export default Counter;