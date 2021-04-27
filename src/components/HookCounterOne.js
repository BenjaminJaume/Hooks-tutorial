import React, { useState, useEffect } from 'react'

function HookCounterOne() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    
    useEffect(() => {
        console.log("update component")
        document.title = `You clicked ${count} times`
    }, [count])

    return (
        <div>
            <form>
                <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
            </form>
            <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>        
        </div>
    )
}

export default HookCounterOne
