import React, { useState } from 'react'

function HooksExample() {
  // useState hook to manage state
  const [count, setCount] = useState(0);
  return (
    <div>

        <p>You clicked {count} times</p>
        <button className='button' onClick={() => setCount(count + 1)}></button>
        <button onClick={() => setCount(0)}>Reset</button>
        <p>This is a simple React Hooks example.</p>


    </div>
  )
}

export default HooksExample