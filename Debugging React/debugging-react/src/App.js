import './App.css';
import {useState} from 'react';

function App() {
  return (
    <>
      <Counter initialValue={5}/>
      <Counter />
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