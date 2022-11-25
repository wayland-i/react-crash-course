import React, { useState } from 'react';


function App() {

  
  return (
    <>
      <Counter startingCount={10}></Counter>
      <Counter></Counter>
    </>
  );
}

export default App;


function Counter({startingCount = 0}) {
  const [count, setCount] = useState(startingCount);
  
  return (
    <>
      <button onClick={() => {
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        }}>
        Increment
      </button>
      <p>Count: {count}</p>
    </>
  );
}