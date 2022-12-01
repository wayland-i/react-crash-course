import './App.css';
import React, {useState} from 'react';
import Profile from './Profile';


function App() {

  const conner = {
    name: 'Conner',
    course: 'FrontendExpert'
  };

  const clement = {
    name: 'Clement',
    course: 'AlgoExpert'
  }


  const [user, setUser] = useState(conner);

  const toggleUser = () => {
    if (user === conner) {
      setUser(clement);
    } else {
      setUser(conner);
    }
  }


  return (
    <>
      <Profile user={user} />
      <button onClick={toggleUser}>Toggle User</button>
    </>
  );
}

export default App;
