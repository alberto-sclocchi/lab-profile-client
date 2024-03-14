import React from 'react'

export default function SignUp() {
  return (
    <div className="app-box">
        <div>
            <h3>Sign up</h3>
            <form>
                <div>
                    <label>Username</label>
                    <input type="text" name="username" /> 
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" name="password" /> 
                </div>

                <div>
                    <label>Campus</label>
                    <input type="text" name="campus" /> 
                </div>

                <div>
                    <label>Course</label>
                    <input type="text" name="text" placeholder="Web Dev, UX/UI, Data Analytics, Cyber Security"/> 
                </div>

                <button>Sign up</button>
            </form>
        </div>
        <div>
            <h2>Hello!!</h2>
            <p>Welcome to the IronProfile!</p>
        </div>
    </div>
  )
}
