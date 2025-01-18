import React from 'react'
import '../App.css'
function header() {
  let name = "LPU";
  const Student = {
    name: "Rahul",
    age: 23,
    course: "B.Tech"
  }
  return (
    <div className="header">
      <h1>Header Component</h1>
      <h2> Welcome to {name}</h2>
      <h3>Student Name: {Student.name}</h3>
      <h3>Student Age: {Student.age}</h3>
      <h3>Student Course : {  Student.course}</h3>
    </div>

  )
}

export default header