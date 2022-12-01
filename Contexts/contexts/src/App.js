import './App.css';
import React, {useState} from 'react';
import Profile from './Profile';
import { UserContext } from './UserContext';


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
      <UserContext.Provider value={user}>
        <Profile />
      </UserContext.Provider>
      <button onClick={toggleUser}>Toggle User</button>
    </>
  );
}

export default App;
