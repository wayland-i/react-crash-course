import React, {useState, useRef} from 'react';


function App() {
  const inputRef = useRef(null);
  // console.log(inputRef);
  // inputRef.current.focus();

  const focusInput = () => {
    inputRef.current.focus();
  }


  return (
    <>
     <MyInput ref={inputRef}/>
     <button onClick={focusInput}>Focus</button>
    </>
  );
}

export default App;

function MyInput(props) {
  return <input {...props} style={{color: 'red'}}></input>
}
