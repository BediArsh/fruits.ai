import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/fruit-ai-logo.png';  // Add the logo image

function HomePage() {
  return (
    <header className="home-header">
      <nav className="navbar container">
        <img src={logo} alt="Fruit.ai Logo" className="logo" />

      </nav>

      <div className="homepage-content">
        <h1>Welcome to Fruit.ai</h1>
        <p>Your personal fruit assistant for health and nutrition information.</p>

        <div className="navigation-buttons">
          <Link to="/chatbot">
            <button className="nav-btn">Chatbot</button>
          </Link>
          <Link to="/faq">
            <button className="nav-btn">FAQ</button>
          </Link>
          <Link to="/about">
            <button className="nav-btn">About</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default HomePage;
