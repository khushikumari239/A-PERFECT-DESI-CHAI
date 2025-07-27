import React from 'react';
import './IngredientCard.css';

const IngredientCard = ({ name, image, quantity }) => {
  return (
    <div className="ingredient-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{quantity}</p>
    </div>
  );
};

export default IngredientCard;
