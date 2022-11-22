import './App.css';

function App() {
  return (
    <MyButton onClick={handleClick}>Click Me</MyButton>
  );
}

export default App;

function handleClick(event) {
  console.log(event);
}

function MyButton(props) {
  return (
    <button 
      {...props}
      style={{
        color: 'red'
      }} />
  );
}