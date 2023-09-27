import React, { useContext, useState } from 'react'
import UserContext from '../../context/UserContext'


const Profile = () => {
    const {user} = useContext(UserContext)

    if(!user) return <> Please Login</>
    
  return <div>Welcome {user.username}</div>
}

export default Profile