import './App.css';
import React, { useContext } from 'react';
import Profile from './Profile';
import { UserContext, UserContextProvider } from './UserContext';


export default function App() {

  return (
    <>
      <UserContextProvider>
        <AppInternal />
      </UserContextProvider>
    </>
  );
}

function AppInternal() {
  const {toggleUser} = useContext(UserContext);

  return (
    <>
      <Profile />
      <button onClick={toggleUser}>Toggle User</button>
    </>
  )
}
