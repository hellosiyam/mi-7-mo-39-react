import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)
    
    const clickHandel = () => {
        const newCount = count + 1 ;
        setCount(newCount)
    }

    const reduceHandel = () => {
        const reduce = count - 1;
        setCount(reduce)
    }
    return (
        <div style={{border:'solid 2px green'}}>
            <h2>Count : {count}</h2>
            <button onClick={clickHandel}>Add</button>
            <button onClick={reduceHandel}>Reduce</button>
        </div>
    )
}