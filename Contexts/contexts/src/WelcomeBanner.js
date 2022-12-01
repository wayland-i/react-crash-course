import React from 'react';

function WelcomeBanner({user}) {
  return (
    <h1>Hello {user.name}</h1>
  )
}

export default WelcomeBanner;