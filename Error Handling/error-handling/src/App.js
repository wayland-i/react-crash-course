import './App.css';
import { Component } from 'react';

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <ErrorBoundry fallback={<h1>There was an error</h1>}>
        <Buggy />
      </ErrorBoundry>
    </>
  );
}

export default App;


function Buggy() {
  // throw new Error('error');
  return <h1>Buggy</h1>;
}

class ErrorBoundry extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error)  {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}