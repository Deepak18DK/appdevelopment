import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import '../Assets/css/app.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import finmatelogo1 from '../Assets/images/logo3.png';
import { login } from '../redux/userSlice';
import Footer from '../components/Footer';

const Login = () => {
  const dispatch = useDispatch();
    const[login1,setLogin]=useState({
        email:'',
        password:''
    })

    const [emailError, setEmailError] = useState('');

    const nav=useNavigate();
    const handleRoute=(e)=>{
        nav('/register')
    }
    const handleChange=(e)=>{
        e.preventDefault();
        setLogin({...login1,[e.target.id]:e.target.value})
    }
    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
      };
    
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        // Validate email
    if (!validateEmail(login1.email)) {
        setEmailError('Please enter a valid email address.');
        return;
      }
  
      // Clear any previous email validation error
      setEmailError('');
  
        console.log(`Email :${login1.email}`)
        console.log(`Password :${login1.password}`)
        dispatch(login({
          email :login1.email
        }))
        toast.promise(
          new Promise((resolve) => {
            // Simulate some asynchronous operation
            setTimeout(() => {
              resolve('Logged in successfully!');
            }, 2000); // Adjust the delay as needed
          }),
          {
            loading: 'Logging in...',
            success: 'Logged in successfully!',
            error: 'An error occurred while logging in.',
          }
        ).then(() => {
          // Navigate to the next page after the toast is closed or after a delay
          setTimeout(() => {
            nav('/dashboard');
          }, 1000); // Adjust the delay as needed
        });
      }
  return (
    <div style={{backgroundImage: "url('https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600'", 
    backgroundRepeat: "no-repeat",
    backgroundPosition:" center",
    minWidth: "100%",
    minHeight:"100%"}}>
      <div>
        <Toaster />
      </div>
      <div className="main d-flex-c">
        <form onSubmit={handleSubmit}>
          <div className="auth-form d-flex-c">
            <img src={finmatelogo1} style={{ width: '30%' }} alt="Logo" />
            <h3 style={{ fontSize: '24px', color: 'blue' }}>LOGIN</h3>
            <input
              type="email"
              name="email"
              id="email"
              className="input-field"
              placeholder="Email"
              onChange={handleChange}
              autoFocus
              required
            />
            {emailError && <p className="error-text">{emailError}</p>}
            <input
              type="password"
              name="password"
              id="password"
              className="input-field"
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <button type="submit" className="auth-btn">
              Login
            </button>
            <p>
              <span
                className="text-link"
                onClick={handleRoute}
                style={{
                  cursor: 'pointer',
                  textDecoration: 'underline',
                }}
              >
                <b>New user, click here to signup</b>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
