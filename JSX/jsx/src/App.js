import './App.css';

function App() {
  // const error = true;
  // return <h1>{error ? 'Error' : 'Success'}</h1>

  const props = {
    id: 'input',
    type: 'text',
    maxLength: 3
  }

  return (
    <>
      <label htmlFor="input" >Input: </label>
      <input {...props} placeholder="user" />
    </>
  );
}

export default App;
