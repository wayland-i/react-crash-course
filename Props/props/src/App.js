import './App.css';

function App() {
  return (
    <>
      <Comment username="Conner" time={(new Date()).toString()}>
        <h1>Hello World</h1>
        <p>This is a comment</p>
      </Comment>
    </>
  );
}


function Comment({username, time, children}) {
  return (
    <section>
      <p>{username} commented at {time}</p>
      {children}
    </section>
  )
}

export default App;
