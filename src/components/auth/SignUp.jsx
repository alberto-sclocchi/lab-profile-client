import React, { useContext, useState } from 'react';
import AuthContext from './context/Auth.context';

export default function SignUp() {
 const [ formData, setFormData] = useState({
    username: "",
    email:"",
    password: "",
    campus: "",
    course: ""
 })

 const {signUpUser} = useContext(AuthContext);

 const handleChange = (event) => {
    // console.log({formData});
    setFormData((prevState) => ({...prevState, [event.target.name] : event.target.value}))
 }

 const handleSubmit = (event) => {
    event.preventDefault();
    signUpUser(formData);
    console.log({finalData: formData})

    setTimeout(()=>{
        setFormData({
            username: "",
            email:"",
            password: "",
            campus: "",
            course: ""
        })
    }, 1)
 }

  return (
    <div className="app-box form-box"> 
        <div className="form" >
            <h2>Sign up</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange}/> 
                </div>

                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange}/> 
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange}/> 
                </div>

                <div>
                    <label>Campus</label>
                    <input type="text" name="campus" value={formData.campus} onChange={handleChange}/> 
                </div>

                <div>
                    <label>Course</label>
                    <input type="text" name="course" placeholder="Web Dev, UX/UI, Data Analytics, Cyber Security" value={formData.course} onChange={handleChange}/> 
                </div>

                <button>Sign up</button>
            </form>
        </div>
        <div className="info-box">
            <h3>Hello!!</h3>
            <p>Welcome to the IronProfile!</p>
        </div>
    </div>
  )
}
