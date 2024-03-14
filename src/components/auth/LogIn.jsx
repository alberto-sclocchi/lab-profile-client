import React from 'react'
import { Link } from 'react-router-dom'

export default function LogIn() {
  return (
    <div className="app-box">
        <div>
            <h3>Log in</h3>
            <form>
                <div>
                    <label>Username</label>
                    <input type="text" name="username" /> 
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" name="password" /> 
                </div>

                <button>Log in</button>
            </form>

            <p>If you don't have an account yet, you can create your account <Link to="/sign-up">here</Link>.</p>
        </div>
        <div>
            <h2>Hello!!</h2>
            <p>Awesome to have at IronProfile again!</p>
        </div>
    </div>
  )
}
