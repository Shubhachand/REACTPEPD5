import React, { useState } from 'react';

function Operation() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me 
            </button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

export default Operation;