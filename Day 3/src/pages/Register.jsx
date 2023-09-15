import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import finmatelogo1 from '../Assets/images/logo3.png'

const Register = () => {

    const[login,setLogin]=useState({
        email:'',
        username:'',
        password:''
    })
    const handleChange = (e)=>{
        e.preventDefault();
        setLogin({...login,[e.target.id]:e.target.value})
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(`Email : ${login.email}`)
      console.log( `Password: ${login.password}`)
      console.log( `Username: ${login.username}`)
        nav('/')
      }

    const nav=useNavigate()
    const handleRoute=(e)=>{
        nav('/')
    }
   
  return (
    <>
    <div className="main d-flex-c">
         <form onSubmit={handleSubmit}>
             <div className="auth-form d-flex-c">
             <img src={finmatelogo1} style={{width:"30%"}} />
              <h3>Signup here</h3>
                <input type="email " name="email" id="email" className='input-field' placeholder='Email' onChange={handleChange} autoFocus required/>
                <input type="username " name="username" id="username" className='input-field' placeholder='Username' onChange={handleChange} required/>
                <input type="password" name="password" id="password" className='input-field' placeholder='password' onChange={handleChange} required/>
                <button type="submit" className="auth-btn">SignUp</button>
                <p> <span className='text-link' onClick={handleRoute}><b>Already have an account, Login</b></span></p>
           </div>
          </form>
     
    </div>
    </>
  )
}

export default Register