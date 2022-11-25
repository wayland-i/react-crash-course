import React, { useState } from 'react';

function Counter() {

    const [count, setCount] = useState(0);

  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <label>Count: {count}</label>
    </div>
  )
}

export default Counter;