import './App.css';
import {useState, useEffect} from 'react';

let renderCount = 0;

function App() {
    renderCount++;
    console.log('rendering');
  return (
    <>
      <Counter initialValue={5}/>
      <Counter />
      <p>Render count: {renderCount}</p>
    </>
  );
}

export default App;


function Counter({initialValue = 0}) {
  const [count, setCount] = useState(initialValue);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <p>Count: {count}</p>
    </>
  );
}