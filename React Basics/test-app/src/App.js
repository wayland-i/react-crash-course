import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <p>Hello World</p>
      <SayHello></SayHello>
      <SayHello></SayHello>
    </div>
  );
}

function SayHello() {
  return <p>Hello World</p>;
}

export default App;
