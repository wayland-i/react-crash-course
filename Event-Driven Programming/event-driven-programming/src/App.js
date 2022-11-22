import './App.css';

function App() {
  return (
    <button onClick={handleClick}>Click Me</button>
  );
}

export default App;

function handleClick(event) {
  console.log(event);
}