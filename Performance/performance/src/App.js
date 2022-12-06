import './App.css';
import React, {useState, useMemo} from 'react';
import MyButton from './MyButton';

function App() {
  const [num, setNum] = useState(10);
  const [logValue, setLogValue] = useState('');
  const fibValue = useMemo(() => {
    console.log('calculating fib value');
    return fib(num)
  }, [num]);

  return (
    <>
      <h1>Fib {num} is {fibValue}</h1>
      <input
        typbe="number"
        value={num}
        onChange={(event) => setNum(parseInt(event.target.value))}
      />

      <input 
        type="text"
        value={logValue}
        onChange={(event) => setLogValue(event.target.value)}
      />

      <MyButton onClick={() => {
        console.log(logValue);
      }}>Log Value</MyButton>
    </>
  );
}

export default App;

function fib(n) {
  if (n === 2) return 1;
  if (n === 1) return 0;
  return fib(n - 1) + fib(n - 2);
}