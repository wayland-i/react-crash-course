import React from 'react';


function App() {

  let count = 0;
  

  return (
    <>
      <button onClick={() => count++}>
        Increment
      </button>
      <p>Count: {count}</p>
    </>
  );
}

export default App;
