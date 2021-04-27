import React, { useEffect, useState } from 'react'

function HookTimer() {
    const [count, setCount] = useState(0);
    const [display, setDisplay] = useState(false)
    
    const tick = () => {
        setCount(prevCount => prevCount + 1)
        setDisplay(!display)
    }

    useEffect(() => {
        const interval = setTimeout(tick, 1000);

        return () => {
            clearInterval(interval);
        }
    })

    return (
        <div>
            <h1>Timer: {count}s</h1>
            {display ? <p>Tick</p> : <p>Tack</p>}
        </div>
    )
}

export default HookTimer
