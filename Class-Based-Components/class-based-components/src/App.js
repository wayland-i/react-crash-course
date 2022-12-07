import './App.css';
import { createRef, Component, useState } from 'react';

function App() {
  const [shouldRender, setShouldRender] = useState(true);
  return (
    <>
      <Counter startingCount={10}/>      
      { shouldRender && <Counter /> } 
      <button onClick={() => setShouldRender(!shouldRender)}>
        Toggle Counter
      </button>
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
    };
    this.buttonRef = createRef();
  }

  componentDidMount() {
    console.log('mounted');
    console.log(this.buttonRef);
  }

  render() {
    console.log(this.buttonRef);
    return (
      <>
        <button ref={this.buttonRef} onClick={() => {
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

