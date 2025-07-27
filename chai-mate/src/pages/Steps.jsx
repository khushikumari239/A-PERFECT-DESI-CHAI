import React, { useState } from 'react';
import './Steps.css';
import { useNavigate } from 'react-router-dom';

// Import images
import step1 from '../assets/step1.png';
import step2 from '../assets/step2.png';
import step3 from '../assets/step3.png';
import step4 from '../assets/step4.png';
import step5 from '../assets/step5.png';
import step6 from '../assets/step6.png';
import step7 from '../assets/step7.png';

const chaiSteps = [
  {
    text: "Boil 1 cup water 💧 in a pan.",
    image: step1
  },
  {
    text: "Add 1 tsp tea leaves 🍃 and let it simmer.",
    image: step2
  },
  {
    text: "Add 1 cup milk 🥛 and bring to a boil.",
    image: step3
  },
  {
    text: "Add 1 tsp sugar 🍬 and stir well.",
    image: step4
  },
  {
    text: "Add a pinch of spices 🌿 for flavor.",
    image: step5
  },
  {
    text: "Strain the tea ☕ into a cup.",
    image: step6
  },
  {
    text: "Your chai is ready to serve! Enjoy 💛",
    image: step7
  },
];

const Steps = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentStep < chaiSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
  };

  const handleHome = () => {
    navigate('/');
  };

  return (
    <div className="steps-container">
      <h2>Step {currentStep + 1} of {chaiSteps.length}</h2>
      
      <img src={chaiSteps[currentStep].image} alt="Step visual" className="step-image" />

      <p className="step-text">{chaiSteps[currentStep].text}</p>

      <div className="buttons">
        <button onClick={handleBack} disabled={currentStep === 0}>← Back</button>
        <button onClick={handleNext} disabled={currentStep === chaiSteps.length - 1}>Next →</button>
      </div>

      {currentStep === chaiSteps.length - 1 && (
        <div className="final-buttons">
          <button onClick={handleRestart}>Restart 🔁</button>
          <button onClick={handleHome}>Go Home 🏠</button>
        </div>
      )}
    </div>
  );
};

export default Steps;
