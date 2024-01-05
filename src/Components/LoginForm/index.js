import React, { useState } from 'react';
import  axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './index.css'

const LoginForm = () =>  {
  const [userName, setuserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setuserName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      userName,
      password,
    };

    try {
      const response = await axios.post('https://localhost:7268/api/Logins', data);
      console.log(response)
      if (response.data === "S") {
        setErrorMessage('');
        setSuccessMessage('Login successful!');
        navigate('/home');
      } else {
        setErrorMessage('Invalid credentials');
        setSuccessMessage('');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Failed to login');
      setSuccessMessage('');
    }
  };

    return(
      <div className="login-form-container">
          <img
            src="https://www.paatham.in/assets/images/img/lib.png"
            className="login-website-logo-desktop-img"
            alt="website login"
          />
           
          <form className='form-container' onSubmit={handleSubmit}>
            <label htmlFor="userName" className="input-label">USERNAME:</label><br />
            <input
              type="text"
              id="userName"
              value={userName}
              className="username-input-field"
              onChange={handleUsernameChange}
              placeholder="Enter Username"
              required
            /> <br />

            <label htmlFor="password" className="input-label" >PASSWORD:</label><br />
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="password-input-field"
              placeholder="Enter Password"
              required
            /> <br />
            <button type="submit" className="login-button">Login</button>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            {successMessage && <div className="success-message">{successMessage}</div>}
            <Link to='/signup'><p>Don't have an account? Signup Here</p></Link>
          </form>
      </div>
    )
   
}

export default LoginForm