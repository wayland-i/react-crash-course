import './App.css';
import React, { useState } from 'react';
import Counter from './Counter';

// Mount (initial render) -> updates (re-render) -> unmount

function App() {

  const [isShown, setIsShown] = useState(true)

  return (
    <>
      <button onClick={() => setIsShown(!isShown)}>
        {isShown ? 'Hide Counter' : 'Show Counter'}
      </button>
      {isShown ? <Counter /> : null}
    </>
  );
}

export default App;
