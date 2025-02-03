import React from 'react'

const array = () => {
    const arr = [1, 2, 3, 4, 5];
    arr.forEach(item , index , arr) => {
        console.log(item, index, arr);
        arr[index] = item*2;
    }
  return (
    <div>
        <h1>Array</h1>
        
    </div>
  )
}

export default array