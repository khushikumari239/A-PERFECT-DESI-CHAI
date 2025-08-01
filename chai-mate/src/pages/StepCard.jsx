import React from 'react';

const StepCard = ({ title, image, instruction, onNext, isLast }) => {
  return (
    <div className="step-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{instruction}</p>
      {!isLast && <button onClick={onNext}>Next</button>}
      {isLast && <p>You're all done! ☕</p>}
    </div>
  );
};

export default StepCard;
// cd A-perfect-DESI-CHAI
// cd chai-mate