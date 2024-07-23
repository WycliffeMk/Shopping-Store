import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./home.css";

const Home = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/signin');
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Welcome to KiliShop</h1>
        <p className="home-description">
          Discover a world of fashion, electronics, home goods, and more. Shop the latest trends, enjoy unbeatable deals, and experience exceptional customer service. Your one-stop destination for all your shopping needs!
        </p>
        {isLoggedIn && (
          <button onClick={handleLogout} className="logout-button">Logout</button>
        )}
      </div>
      <div className="home-image-container">
        <img src="src/images/Home.jpg" className="home-image" alt="Home" />
      </div>
    </div>
  );
};

export default Home;
