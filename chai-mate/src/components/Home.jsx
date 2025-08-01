import React from 'react';
import './Home.css';
import HomeImg from '../assets/Home.png';

function Home() {
  return (
    <div
      className="front-screen"
      style={{ backgroundImage: `url(${HomeImg})` }}
    >
      <div className="card-container">
        <h2 className="morning-text">Good morning, chai lover! 🌤️</h2>
        <h1 className="main-heading">A Perfect Desi Chaai ☕</h1>
        <button className="start-btn">Start Brewing</button>
      </div>
    </div>
  );
}

export default Home;
