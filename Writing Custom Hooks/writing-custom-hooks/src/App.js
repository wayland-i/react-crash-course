import {useEffect, useRef, useState} from 'react'

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const prevCount = usePrevious(count);
  const prevText = usePrevious(text);

  // const prevCount = useRef();
  // useEffect(() => {
  //   prevCount.current = count;
  // }, [count]);

  // const prevText = useRef();
  // useEffect(() => {
  //   prevText.current = text;
  // }, [text]);


  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
      <p>Previous render count: {prevCount}</p>

      <input 
        value={text}
        onChange={(event) => setText(event.target.value)}/>
      <p>Previous render text: {prevText}</p>
    </>
  );
}

function usePrevious(value) {
  const prevRef = useRef();
  useEffect(() => {
    prevRef.current = value;
  }, [value]);

  return prevRef.current;
}