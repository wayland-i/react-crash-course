import './App.css';

function App() {
  return (
    <>
      <Hello name="Conner" />
      <Hello name="Clement" /> 
      <Hello />
    </>
  );
}


function Hello({name = 'User'}) {
  return <h1>Hello {name}</h1>
}

export default App;
