import './App.css';
import {useState, Profiler} from 'react';

let renderCount = 0;

function App() {
    renderCount++;
    console.log('rendering');
  return (
    <Profiler id="App" onRender={() => console.log('commit')}>
      <Counter initialValue={5}/>
      <Counter />
      <p>Render count: {renderCount}</p>
    </Profiler>
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