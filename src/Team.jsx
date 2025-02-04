import { useState } from "react"

export default function Team() {

    const [count, setCount] = useState(11);

    const addHandel = () => {
        setCount((count + 1));
    }

    const removeHandel = () => {
        setCount((count - 1));
    }

    const styleDiv = {
        border: '2px solid blue',
        margin: '10px',
        padding: '15px',
        borderRadius: '16px'
    }
    return (
        <div style={styleDiv}>
            <h2>Player : {count}</h2>
            <button onClick={addHandel}>Add Player</button>
            <button onClick={removeHandel}>Remove Player</button>
        </div>
    )
}