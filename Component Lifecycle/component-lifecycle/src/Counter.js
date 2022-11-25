import React, { useEffect, useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const [bool, setBool] = useState(false);

    useEffect(() => {
        console.log('render');
    });

  return (
    <div className='counter'>
        <button onClick={() => setBool(!bool)}>Re-Render</button>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <p>Count: {count}</p>
    </div>
  )
}

export default Counter;