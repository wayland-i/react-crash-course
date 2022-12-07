import './App.css';
import { createRef, Component, useState, createContext } from 'react';

const Theme = createContext({
  mode: 'dark'
})

function App() {
  const [shouldRender, setShouldRender] = useState(true);
  return (
    <Theme.Provider value={{mode: 'dark'}}>
      <Counter startingCount={10}/>      
      { shouldRender && <Counter /> } 
      <button onClick={() => setShouldRender(!shouldRender)}>
        Toggle Counter
      </button>
      <div className='left'></div>
      <div className='right'></div>
    </Theme.Provider>
  );
}


export default App;

class Counter extends Component {
  static contextType = Theme;
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
    console.log(this.context);
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
        {/* <p>Theme: {this.context.mode}</p> */}
        <Theme.Consumer>
          {
            context => <p>Theme: {context.mode}</p>
          }
        </Theme.Consumer>
      </>
    );
  }
}

