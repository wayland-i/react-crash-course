import './App.css';
import { useState } from 'react';

function App() {
  return (
    <>
      <Counter startingCount={10}/>      
      <Counter />
      <div className='left'></div>
      <div className='right'></div>
    </>
  );
}

export default App;

function Counter({ startingCount = 0 }) {
  const [count, setCount] = useState(startingCount);

  return (
    <>
      <button onClick={() => setCount(count + 1)}> 
        Increment
      </button>
      <p>Count: {count}</p>
    </>
  );

}
