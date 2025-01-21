import React from 'react';

function Callback() {
  // First function to execute
  const functionOne = (callback) => {
    console.log('Function One is executed.');
    callback(); // Call the callback function
  };

  // Second function to use as a callback
  const functionTwo = () => {
    console.log('Function Two is executed.');
  };

  // Call the functions in sequence using console.log
  console.log('Calling Function One with Function Two as a callback:');
  functionOne(functionTwo);

  return (
    <div>
      <h2>Check the console for callback function execution.</h2>
    </div>
  );
}

export default Callback;
