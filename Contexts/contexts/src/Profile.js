import React from 'react'
import WelcomeBanner from './WelcomeBanner';
import Course from './Course';

function Profile({user}) {
  return (
    <>
        <WelcomeBanner user={user} />
        <Course user={user} />
    </>
  )
}

export default Profile