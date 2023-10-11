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
  const [login1, setLogin] = useState({
    username: '',
    password: '',
  });

  const [usernameError, setUsernameError] = useState('');

  const nav = useNavigate();

  const handleRoute = (e) => {
    nav('/register');
  };

  const handleChange = (e) => {
    e.preventDefault();
    setLogin({ ...login1, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`Username: ${login1.username}`);
    console.log(`Password: ${login1.password}`);

    dispatch(
      login({
        username: login1.username,
      })
    );

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
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600'",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minWidth: '100%',
        minHeight: '100%',
      }}
    >
      <div>
        <Toaster />
      </div>
      <div className="main d-flex-c">
        <form onSubmit={handleSubmit}>
          <div className="auth-form d-flex-c">
            <img src={finmatelogo1} style={{ width: '30%' }} alt="Logo" />
            <h3 style={{ fontSize: '24px', color: 'blue' }}>ADMIN LOGIN</h3>
            <input
              type="text"
              name="username"
              id="username"
              className="input-field"
              placeholder="Username"
              onChange={handleChange}
              autoFocus
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
            <button type="submit" className="auth-btn">
              Sign In
            </button>
           
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
