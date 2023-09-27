import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import finmatelogo1 from '../Assets/images/logo3.png';

const Register = () => {
  const [login, setLogin] = useState({
    email: '',
    username: '',
    password: '',
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

  const handleSubmit = (e) => {
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

    // If validation passes, proceed with registration
    console.log(`Email: ${login.email}`);
    console.log(`Password: ${login.password}`);
    console.log(`Username: ${login.username}`);

    // Navigate to the desired page
    nav('/login');
  };

  const nav = useNavigate();

  const handleRoute = (e) => {
    nav('/');
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
              id="username"
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
