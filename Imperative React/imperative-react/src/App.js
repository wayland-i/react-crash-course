// import './App.css';
import Counter from './Counter';
import CustomInput from './CustomInput';

function App() {
  return (
    <div>
      <Counter className='myClass'/>
      <CustomInput placeholder="Type Something..."/>
      <button>
        Reset
      </button>
    </div>
  );
}

export default App;
