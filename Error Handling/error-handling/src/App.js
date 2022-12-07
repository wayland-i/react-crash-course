import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Buggy />
    </>
  );
}

export default App;


function Buggy() {
  throw new Error('error');
  return <h1>Buggy</h1>;
}