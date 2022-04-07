import { useState } from "react";
import './Counter.module.css';

const Counter = () => {
    const [initialValue, setInitialValue] = useState('')
    
    const handleChange = (e) => {
        setInitialValue(e.target.value);
    }

    const handleInc = () => {
        setInitialValue(+initialValue+1);
    }
    const handleDec = () => {
        setInitialValue(+initialValue-1);
    }
    const handleDbl = () => {
        setInitialValue(+initialValue*2);
    }

    return (
        <div style={{border:"1px solid gray", width:"min-content", padding:"20px", margin: "auto"}}>
            <input type={"text"} value={initialValue} placeholder="Enter initial value here..." onChange={handleChange}/>
            <h1>{initialValue}</h1>
            <button onClick={handleInc}>Increament</button>
            <button onClick={() => handleDec()}>Decrement</button>
            <button onClick={() => handleDbl()}>Double</button>
        </div>
    )
}

export default Counter;