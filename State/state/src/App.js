import React, { useReducer, useState } from 'react';


function reducer(state, action) {
  switch(action.type) {
    case 'increment':
      return {count: state.count + action.num};
    case 'decrement':
      return {count: state.count - action.num};
    default:
      throw new Error('Unknow action type')
  }
}


function App() {

  // const [count, setCount] = useState(0);
  // const [value, setValue] = useState('');
  const [state, dispatch] = useReducer(reducer, {
    count: 0
  });
  
  return (
    <>
      {/* <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      /> */}
      <Counter count={state} onClick={() => dispatch({
        type: 'increment',
        num: 1
      })}>

      </Counter>
            <Counter count={state} onClick={() => dispatch({
        type: 'increment',
        num: 10
      })}></Counter>
    </>
  );
}

export default App;


function Counter({count, onClick}) {
  // const [count, setCount] = useState({num: startingCount});
  // const [count, setCount] = useState([1, 2, 3]);
  

  // setCount({num: count.num + 1});
  // setCount({...count, otherCount: 0});
  // setCount([...count, 4]);
  
  return (
    <>
      <button onClick={onClick}>
        Increment
      </button>
      <p>Count: {count}</p>
    </>
  );
}