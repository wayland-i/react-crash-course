import React, { forwardRef, useImperativeHandle, useState, usseImperativeHandle } from 'react';

forwardRef(function Counter(props, ref) {

    const [count, setCount] = useState(0);

    useImperativeHandle(ref, () => {
      return {
        reset: () => setCount(0)
      };
    });

  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <label>Count: {count}</label>
    </div>
  )
});

export default Counter;