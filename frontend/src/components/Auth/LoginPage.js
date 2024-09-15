import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import googleIcon from '../../assets/google-icon.png';  // Google icon
import facebookIcon from '../../assets/facebook-icon.png';  // Facebook icon

function LoginPage() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);  // Toggle between login and create account
  const [newUserId, setNewUserId] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  // Function to handle user login
  const handleLogin = (e) => {
    e.preventDefault();
    const storedUserId = localStorage.getItem('userId');
    const storedPassword = localStorage.getItem('password');
    if (userId === storedUserId && password === storedPassword) {
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };

  // Function to handle new account creation
  const handleCreateAccount = (e) => {
    e.preventDefault();
    if (newUserId && newPassword) {
      localStorage.setItem('userId', newUserId);
      localStorage.setItem('password', newPassword);
      alert('Account created successfully! You can now log in.');
      setIsCreatingAccount(false);  // Switch back to login after account creation
    } else {
      alert('Please enter a valid username and password.');
    }
  };

  // Google and Facebook login placeholders
  const handleGoogleSignIn = () => {
    alert('Google Sign-In clicked (Integration pending)');
  };

  const handleFacebookSignIn = () => {
    alert('Facebook Sign-In clicked (Integration pending)');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>{isCreatingAccount ? 'Create a New Account' : 'Login to Fruit.ai'}</h2>
        
        {isCreatingAccount ? (
          // Create Account Form
          <form onSubmit={handleCreateAccount}>
            <input
              type="text"
              placeholder="New User ID"
              value={newUserId}
              onChange={(e) => setNewUserId(e.target.value)}
            />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button type="submit" className="login-btn">Create Account</button>
          </form>
        ) : (
          // Login Form
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="login-btn">Login</button>
          </form>
        )}

        <div className="social-login">
          <h3>Or Sign in with</h3>
          <button onClick={handleGoogleSignIn} className="google-btn">
            <img src={googleIcon} alt="Google Icon" /> Sign in with Google
          </button>
          <button onClick={handleFacebookSignIn} className="facebook-btn">
            <img src={facebookIcon} alt="Facebook Icon" /> Sign in with Facebook
          </button>
        </div>

        <div className="switch-form">
          {isCreatingAccount ? (
            <p>
              Already have an account? <span onClick={() => setIsCreatingAccount(false)}>Login here</span>
            </p>
          ) : (
            <p>
              Don't have an account? <span onClick={() => setIsCreatingAccount(true)}>Create one</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
