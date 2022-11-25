import React, { useState } from 'react';


function App() {

  const [count, setCount] = useState(0);
  
  return (
    <>
      <Counter count={count} setCount={setCount}></Counter>
      <Counter count={count} setCount={setCount}></Counter>
    </>
  );
}

export default App;


function Counter({count, setCount}) {
  // const [count, setCount] = useState({num: startingCount});
  // const [count, setCount] = useState([1, 2, 3]);
  

  // setCount({num: count.num + 1});
  // setCount({...count, otherCount: 0});
  // setCount([...count, 4]);
  
  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <p>Count: {count}</p>
    </>
  );
}