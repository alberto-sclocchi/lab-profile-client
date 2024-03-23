import React, { useContext, useEffect } from 'react'
import AuthContext from './context/Auth.context'
import { useNavigate } from 'react-router-dom';

export default function ProfilePage() {
  const {logOutUser, user, getCurrentUser} = useContext(AuthContext);
  const navigateTo = useNavigate();

  const getUser = async () => {
    await getCurrentUser();

    !user && navigateTo("/");
  }

  useEffect(()=>{
    getUser();
  })

  return (
    <div className="app-box">
    {!!user ? 
    <div className="profile">
        <h2>Profile Page</h2>
        <p>{user.username}</p>
        <p>{user.email}</p>
        <p>{user.campus}</p>
        <p>{user.course}</p>
        <button className="logout-button" onClick={() => logOutUser()}>Log Out</button>
        </div>
        : <div>Loading...</div>
    }
    </div>
  )
}
