import React from 'react';
import './components/StepOne.css'; // ✅ correct CSS import

import teaIcon from './assets/step1.png'; // ✅ correct image import
import bgImage from './assets/bg.png';   // ✅ correct image import

function StepOne() {
  return (
    <div className="outer-wrapper">
      <div
        className="mobile-wrapper"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="content">
          <img src={teaIcon} alt="Green Tea" className="tea-icon" />

          <p className="step-text">Boil water to 85 degrees</p>

          <div className="buttons">
            <button className="btn">Steps</button>
            <button className="btn">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepOne;
