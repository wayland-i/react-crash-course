import React, {useState, useRef} from 'react';


function App() {
  
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  }


  return (
    <>
     <input ref={inputRef}/>
     <button onClick={focusInput}>Focus</button>
    </>
  );
}

export default App;
