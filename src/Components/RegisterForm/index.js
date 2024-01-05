import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './index.css'

const RegisterForm = () =>  {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [contactnumber, setContactnumber] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    // Prevent the default browser behavior
    e.preventDefault();

    // Create the data object to send to the backend
    const data = {
      firstname: firstname,
      lastname: lastname,
      contactnumber: contactnumber,
      email: email,
      username: username,
      password: password,
    };

    // Use axios to make a post request to the api endpoint
    try {
      // Replace the url with your own backend api
      const response = await axios.post("https://localhost:7268/api/Users", data);

      // Handle the response from the backend
      if (response.status === 200) {
        
        // Registration successful
        alert("You have registered successfully!");
        navigate('/login');
      } else {
        // Registration failed
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      // Handle the error from the request
     
      alert("An error occurred. Please check your network connection.");
    }
  };
   
  return(
    <div className="container">
      <img src="https://www.edusys.co/images/library.png" alt='img' className="register-image"/>
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1 className="register-form-heading">Register</h1>
        <label htmlFor="firstname" className="input-label">FIRSTNAME:</label><br />
        <input
          type="firstname"
          id="firstname"
          name="firstname"
          value={firstname}
          className="register-input"
          placeholder="Enter First Name"
          onChange={(e) => setFirstname(e.target.value)}
          required
        /> 
        <br />

        <label htmlFor="lastname" className="input-label" >LASTNAME:</label><br />
        <input
          type="lastname"
          id="lastname"
          name="lastname"
          value={lastname}
          className="register-input"
          placeholder="Enter Last Name"
          onChange={(e) => setLastname(e.target.value)}
          required
        />
        <br />

        <label htmlFor="contactnumber" className="input-label" >CONTACT NUMBER:</label><br />
        <input
          type="contactnumber"
          id="contactnumber"
          name="contactnumber"
          value={contactnumber}
          className="register-input"
          placeholder="Enter Contact Number"
          onChange={(e) => setContactnumber(e.target.value)}
          required
        />
        <br />
      
        <label htmlFor="email" className="input-label">EMAIL:</label><br />
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          className="register-input"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        /> 
        <br />

        <label htmlFor="username" className="input-label">USERNAME:</label><br />
        <input
          type="username"
          id="username"
          name="username"
          value={username}
          className="register-input"
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
          required
        /> 
        <br />

        <label htmlFor="password" className="input-label" >PASSWORD:</label><br />
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          className="register-input"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
                         
        <button type="submit" className="register-submit-button">Submit</button>
                         
      </form>
                 
    </div>
    </div>
  )
}

export default RegisterForm