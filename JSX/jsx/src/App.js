import './App.css';

function App() {
  const error = false;

  return (
    <>
    {error && <h1>Error</h1>}
    {error || <h1>Success</h1>}
    </>
  );
}

export default App;
