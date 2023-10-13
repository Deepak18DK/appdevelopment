import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import finmatelogo1 from '../Assets/images/logo3.png';
import { userRegister } from '../service/api';
import toast from 'react-hot-toast';

const Register = () => {
  const [login, setLogin] = useState({
    email: '',
    name: '',
    password: '',
    role: 'user'
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    e.preventDefault();
    setLogin({ ...login, [e.target.id]: e.target.value });
  };

  const validateEmail = (email) => {
    // Simple email validation using a regular expression
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const validatePasswordStrength = (password) => {
    // Check if the password meets your strength criteria (e.g., length)
    return password.length >= 8; // You can add more criteria if needed
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    // Validate email
    if (!validateEmail(login.email)) {
      setErrors({ ...errors, email: 'Invalid email format' });
      return;
    }

    // Validate password strength
    if (!validatePasswordStrength(login.password)) {
      setErrors({ ...errors, password: 'Password must be at least 8 characters long' });
      return;
    }

    // Clear any previous validation errors
    setErrors({ email: '', password: '' });


    const res = await userRegister(login);
    console.log(res)
    if(res.data==="User registered successfully" && res.status=="200")
    {
    console.log(`Email :${login.email}`)
    console.log(`Password :${login.password}`)
      toast.promise(
        new Promise((resolve) => {
          // Simulate some asynchronous operation
          setTimeout(() => {
            resolve('Sign up successfull!');
          }, 2000); // Adjust the delay as needed
        }),
        {
          loading:'Creating your account...',
          success: 'Sign up successfull!',
          error: 'An error occurred while signing in.',
        }
      ).then(() => {
        // Navigate to the next page after the toast is closed or after a delay
        setTimeout(() => {
          nav('/login');
        }, 1000); // Adjust the delay as needed
      });
    }
    else if (res.data==="Something went wrong!" && res.status=="400") 
    {
      toast.error("Something went wrong, Please try again");
    }
    

  };

  const nav = useNavigate();

  const handleRoute = (e) => {
    nav('/login');
  };

  return (
    <>
      <div className="main d-flex-c">
        <form onSubmit={handleSubmit}>
          <div className="auth-form d-flex-c">
            <img src={finmatelogo1} style={{ width: '30%' }} alt="Logo" />
            <h3 style={{ fontSize: '24px', color: 'black' }}><b>SIGNUP</b></h3>
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
            {errors.email && <p className="error-text">{errors.email}</p>}
            <input
              type="text"
              name="username"
              id="name"
              className="input-field"
              placeholder="Username"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              id="password"
              className="input-field"
              placeholder="Password"
              onChange={handleChange}
              required
            />
            {errors.password && <p className="error-text">{errors.password}</p>}
            <button type="submit" className="auth-btn" style={{ backgroundColor: '#e19af8b' }}>
              SIGNUP
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
                <b>Already have an account, Login</b>
              </span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
