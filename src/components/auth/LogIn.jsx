import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from './context/Auth.context';

export default function LogIn() {
    const [ formData, setFormData] = useState({
        email:"",
        password: ""
     })
    
     const {logInUser} = useContext(AuthContext);
    
     const handleChange = (event) => {
        console.log({formData});
        setFormData((prevState) => ({...prevState, [event.target.name] : event.target.value}))
     }
    
     const handleSubmit = (event) => {
        event.preventDefault();
        logInUser(formData);
        // console.log({finalData: formData})
    
        setTimeout(()=>{
            setFormData({
                email:"",
                password: ""
            })
        }, 1)
     }
  return (
    <div className="app-box form-box">
        <div className="form log-in">
            <h2>Log in</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" value={formData.email} onChange={handleChange}/> 
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange}/> 
                </div>

                <button>Log in</button>
            </form>

            <p>If you don't have an account yet, you can create your account <Link to="/sign-up">here</Link>.</p>
        </div>
        <div className="info-box">
            <h2>Hello!!</h2>
            <p>Awesome to have at IronProfile again!</p>
        </div>
    </div>
  )
}
