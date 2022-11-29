import './App.css';
import Counter from './Counter';
import CustomInput from './CustomInput';
import { useRef } from 'react';

function App() {
  const counterRef = useRef();
  const customInputRef = useRef();

  return (
    <>
      <Counter ref={counterRef} />
      <CustomInput ref={customInputRef} />
      <button onClick={() => {

      }}>
        Reset
      </button>
    </>
  );
}

export default App;
