import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="app-box">
        <div className="homepage">
            <h2>IronProfile</h2>
            <p>Today will we create an app with authorization, adding some cool styles!</p>
            <div className="buttons-home">
                <Link to="/sign-up">Sign up</Link>
                <Link to="/log-in">Log in</Link>
            </div>
        </div>
    </div>
  )
}
