// src/pages/Home.jsx
import React from 'react';
import './Home.css';
import bgImage from '../assets/bg.png'; // or wherever your bg.png is
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    // <div
    //   className="home-wrapper"
    //   style={{ backgroundImage: `url(${bgImage})` }}
    // >
    //   {/* <div className='Outer-Self'> */}


    //   <div className="home-container">
    //     <h1 className="greeting">Good Morning 🌞</h1>
    //     <p className="sub-caption">A Perfect Desi Chai App</p>
    //     <button className="start-btn" onClick={() => navigate('/steps')}>
    //       Start Brewing ☕
    //     </button>
    //   </div>
    // </div>
    
    
    // </div>




    <div className="outer-wrapper">
  <div className="mobile-wrapper" style={{ backgroundImage: `url(${bgImage})` }}>
    <div className="home-content">
      <h1 className="greeting">Good Morning ☀️</h1>
      <p className="subcaption">A Perfect Desi Chai App</p>
      <button className="start-btn" onClick={() => navigate('/steps')}>
        Start Brewing
      </button>
    </div>
  </div>
</div>






  );
}

export default Home;





      