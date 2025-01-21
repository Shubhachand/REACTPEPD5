import React from 'react'

function Destructuring() {
    const person ={
        name : 'lenovo',
        age : 25,
        city : 'Delhi'
    };
  return (
    <div> 
        <h1>destructuring</h1>
        <p>name : {person.name}</p>
        <p>age : {person.age}</p>
     </div>
  )
}

export default Destructuring