// import './App.css';
import React, {useState, useMemo, useCallback, lazy} from 'react';
// import MyButton from './MyButton';
const MyButton = lazy(() => import('./MyButton'));

function App() {
  const [num, setNum] = useState(10);
  const [logValue, setLogValue] = useState('');
  const fibValue = useMemo(() => {
    console.log('calculating fib value');
    return fib(num)
  }, [num]);

  const onClickLog = useCallback(() => {
      console.log(logValue)
  }, [logValue])

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
      {
        logValue.length > 0 ? 
          <MyButton onClick={onClickLog}>Log Value</MyButton> : 
          null
      }

      
    </>
  );
}

export default App;

function fib(n) {
  if (n === 2) return 1;
  if (n === 1) return 0;
  return fib(n - 1) + fib(n - 2);
}