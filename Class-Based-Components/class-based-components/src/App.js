import './App.css';
import { Component } from 'react';

function App() {
  return (
    <>
      <Counter startingCount={10}/>      
      <Counter />
      <div className='left'></div>
      <div className='right'></div>
    </>
  );
}

export default App;

class Counter extends Component {
  // state = {
  //   count: this.props.startingCount ?? 0
  // }

  constructor(props) {
    super(props);
    this.state = {
        count: props.startingCount ?? 0
    }
  }
  render() {
    return (
      <>
        <button onClick={() => {
          this.setState({
            count: this.state.count + 1
          });
        }}> 
          Increment
        </button>
        <p>Count: {this.state.count}</p>
      </>
    );
  }
}

