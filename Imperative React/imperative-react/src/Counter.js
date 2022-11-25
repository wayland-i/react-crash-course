import React, { useState } from 'react';

function Counter() {

    const [count, setCount] = useState(0);

  return (
    <>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <label>Count: {count}</label>
    </>
  )
}

export default Counter;