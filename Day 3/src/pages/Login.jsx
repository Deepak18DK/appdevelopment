import React from 'react'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import toast from 'react-hot-toast'
import '../assets/css/app.css'
import { useNavigate } from 'react-router-dom'
import finmatelogo1 from '../assets/images/finmatelogo-1.jpg'



const Login = () => {
    const[login,setLogin]=useState({
        email:'',
        password:''
    })
    const handleChange = (e)=>{
        e.preventDefault();
        setLogin({...login,[e.target.id]:e.target.value})
    }
    const handleSubmit=(e)=>{
    e.preventDefault();
    toast.success('Logged in successfully!')
    console.log(`Email : ${login.email}`)
    console.log( `Password: ${login.password}`)
    }
    const nav=useNavigate()
    const handleRoute=(e)=>{
        nav('/register')
    }
  return (
    <>
    <div><Toaster/></div>
    <div className="main d-flex-c">
         <form onSubmit={handleSubmit}>
             <div className="auth-form d-flex-c">
             <img src={finmatelogo1} width={120} height={120} />
              <h3>Login here</h3>
                <input type="email " name="email" id="email" className='input-field' placeholder='Email' onChange={handleChange} autoFocus required/>
                <input type="password" name="password" id="password" className='input-field' placeholder='password' onChange={handleChange} required/>
                <button type="submit" className="auth-btn">Login</button>
                <p> <span className='text-link' onClick={handleRoute}><b>New user, click here to signup</b></span></p>
           </div>           
          </form>     
    </div>
    </>
  )
}

export default Login