import React from 'react'
import { UserContext } from './UserContext';
import { useContext } from 'react';

function Course() {
    const { user } = useContext(UserContext);
  return (
    <p>Your course is {user.course}</p>
  )
}

export default Course;