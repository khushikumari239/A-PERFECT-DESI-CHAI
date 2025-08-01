

// import React from 'react';
// import './StepOne.css';

import React , {useState} from 'react';
 import "./components/StepOne.css";
import step1Img from './assets/step1.png';
import step2Img from './assets/step2.png';
import step3Img from './assets/step3.png';
import step4Img from './assets/step4.png';
import step5Img from './assets/step5.png';
import step6Img from './assets/step6.png';
import step7Img from './assets/step7.png';
import bgImage from './assets/bg.png';


const steps = [
  {
    image : step1Img,
    message : "Boil Waterrrr"
  },
  {
    image : step2Img,
    message : "Add Tea Leave"
  },
  {
    image : step3Img,
    message : "Now it's time for milkkk"
  },
  {
    image : step4Img,
    message : "Add SUGAR"
  },
  {
    image : step5Img,
    message : "Add Ginger and spices"
  },
  {
    image : step6Img,
    message : "Spices??"
  },
  {
    image : step7Img,
    message : "Strain and serveee! TADAAAA!!!"
  },
  
]





function StepOne() {

  const [stepIndex, setStepIndex] = useState(0);

  const handleNext = () => {
    setStepIndex((prev) => (prev + 1) % steps.length);
  };



  return (
    <div className="outer-wrapper">
      <div
        className="mobile-wrapper"
        style={{ backgroundImage: `url(${bgImage})` }}
      >



        <div className="content">

          <img src={steps[stepIndex].image} alt="Step" className="tea-icon" />

          <p className="step-text">{steps[stepIndex].message}</p>

          <div className="buttons">
            {/* <button className="btn">Steps</button> */}
            <button className="btn"onClick={handleNext}> Next </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepOne;






  






















// cd A-Perfect-DESI-CHAI