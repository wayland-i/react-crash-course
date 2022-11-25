import React, {forwardRef, useRef} from 'react';


function App() {

  return (
    <>
     <MyInput ref={handleRef}/>
     {/* <button onClick={focusInput}>Focus</button> */}
    </>
  );
}

export default App;

function handleRef(domNode) {
  console.log(domNode);
}

const MyInput = forwardRef(function MyInput(props, ref) {
  return <input ref={ref} {...props} style={{color: 'red'}}></input>
});
