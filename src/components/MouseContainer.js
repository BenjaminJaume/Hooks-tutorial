import React, { useState, useEffect } from 'react'
import HookMouse from './HookMouse';

function MouseContainer() {
    const [display, setDisplay] = useState(true);

    useEffect(() => {
        console.log(`Mouse clicked`)
    })

    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle display</button>
            {display && <HookMouse />}
        </div>
    )
}

export default MouseContainer
