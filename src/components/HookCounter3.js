import React, { useState } from 'react'

function HookCounter3() {

    const [name, setName] = useState({firstName: "", lastName: ""});

    return (
        <div>
            <form>
                <input type="text" value={name.firstName}
                onChange={e => setName({ ...name, firstName: e.target.value })} placeholder="Name" />
                <input type="text" placeholder="Last name"
                 onChange={e => setName({ ...name, lastName: e.target.value })}
                />
            </form>

            <div>
                <p>
                    Name: {name.firstName}
                </p>
                <p>
                    Last name: {name.lastName}
                </p>
                <p>
                    {JSON.stringify(name)}
                </p>
            </div>
        </div>
    )
}

export default HookCounter3
