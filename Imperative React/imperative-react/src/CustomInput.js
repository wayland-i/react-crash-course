import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';

export default forwardRef(function CustomInput(props, ref) {
    const [value, setValue] = useState();

    useImperativeHandle(ref, () => {
      return {
        reset: () => setValue('')
      };
    });

  return (
    <div>
        <input 
            placeholder='Type something...' 
            onChange={event => setValue(event.target.value)}
            style={{color: 'red'}}
            />
    </div>
  )
});