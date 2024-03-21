import React, { useContext, useEffect } from 'react'
import AuthContext from './context/Auth.context'

export default function ProfilePage() {
  const {logOutUser, user} = useContext(AuthContext);

//   useEffect(()=>{
//     getCurrentUser();
//   })

  return (
    <div className="app-box">
        <h2>Profile Page</h2>
        <p>{user.username}</p>
        <p>{user.email}</p>
        <button onClick={() => logOutUser()}>Log Out</button>
    </div>
  )
}
