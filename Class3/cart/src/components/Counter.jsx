import { useEffect } from "react";
import { useState } from "react"

const Counter = ({quantity, onUpdate, productId}) => {

    // console.log(quantity, onUpdate, productId);

    const[count, setCount] = useState(quantity);

    const increment = () => {
        const newCount = count + 1;
        setCount(newCount);
        // onUpdate(productId, newCount);
    }

    const decrement = () => {
        const newCount = count - 1;
        setCount(newCount);
        // onUpdate(productId, newCount);
    }

    useEffect(() => {
        onUpdate(productId, count);
    }, [count]);

    return (
    <div style={{margin:"1rem"}}>
        <button style={{backgroundColor:"greenyellow", margin:"1rem"}} onClick={decrement}>-</button> {count} <button style={{backgroundColor:"greenyellow", margin:"1rem"}} onClick={increment}>+</button>
    </div>
    )
}

export default Counter;