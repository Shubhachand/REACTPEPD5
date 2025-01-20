import React from 'react'
// Implement a component Car that accepts a prop brand. If no brand is provided, it should 
// default to "Toyota". 
function Car({ brand }) {
  return (
    <div>
        <h1> {brand || "toyota"} </h1>
    </div>
  )
}

export default Car