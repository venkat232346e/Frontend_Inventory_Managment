import React, { useState } from 'react';
import image1 from './images/image2.png';
import './App.css';  // Import the external CSS file

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container">
      {/* Left Side: Sign-up Form */}
      <div className="formContainer">
        <div className="leftContainer">
          <h2>Sign Up For Free.</h2>
          <form onSubmit={handleSubmit}>
            <div className="inputGroup">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="input"
              />
            </div>
            <div className="inputGroup">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="input"
              />
            </div>
            <div className="inputGroup">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="input"
              />
            </div>
            <button type="submit" className="submitButton">
              Sign Up
            </button>
          </form>
          <div className="footer">
            <p>
              Already have an account?{' '}
              <a href="/" className="signInLink">
                Sign In
              </a>
            </p>
          </div>
          <div className="googleSignUp">
            <button className="googleButton">
              Sign Up With Google
            </button>
          </div>
        </div>
      </div>

      {/* Right Side: Inventory Management and Image */}
      <div className="formContainer"> {/* Applying the same styles as formContainer */}
        <div className="leftContainer"> {/* Applying the same styles as leftContainer */}
          <h2>Inventory Management System</h2>
          <div className="imageContainer">
            <img src={image1} alt="Inventory" className="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
