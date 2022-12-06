import { memo } from 'react'; 

export default memo(function (props) {
    console.log('rendering my button');

    const startTime = new Date();
    while (new Date() - startTime < 1000) {}

    return <button {...props} style={{color: 'red'}} />
});
