import React from 'react'

// (2a)
const ProfileCard = (props) => {
  // (2b)
  return (
    <div>
      <div>Title is {props.title}</div>
      <div>Handle is {props.handle}</div>
    </div>
  )
}

export default ProfileCard
