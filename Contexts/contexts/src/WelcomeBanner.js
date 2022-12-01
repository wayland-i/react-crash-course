import React from 'react';
import { UserContext } from './UserContext';
import { useContext } from 'react';

function WelcomeBanner() {
    const { user } = useContext(UserContext);

  return (
    <h1>Hello {user.name}</h1>
  )
}

export default WelcomeBanner;