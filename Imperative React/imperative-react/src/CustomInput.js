import React, { useState } from 'react';

function CustomInput() {
    const [value, setValue] = useState('');

  return (
    <>
        <input 
            placeholder='Type something...' 
            onChange={event => setValue(event.target.value)}
            style={{color: 'red'}}
            />
    </>
  )
}

export default CustomInput;