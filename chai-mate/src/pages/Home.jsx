import React from 'react';
import IngredientCard from '../components/IngredientCard';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const ingredients = [
  { name: 'Water 💧', image: '/ingredients/water.png', quantity: '1 cup' },
  { name: 'Milk 🥛', image: '/ingredients/milk.png', quantity: '1 cup' },
  { name: 'Tea Leaves 🍃', image: '/ingredients/tea.png', quantity: '1 tsp' },
  { name: 'Sugar 🍬', image: '/ingredients/sugar.png', quantity: '1 tsp' },
  { name: 'Spices 🌿', image: '/ingredients/spices.png', quantity: 'Pinch' }
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>ChaiMate 🍵</h1>
      <p>Your perfect chai recipe, one step at a time.</p>
      <div className="ingredients-grid">
        {ingredients.map((item, index) => (
          <IngredientCard key={index} {...item} />
        ))}
      </div>
      <button className="start-button" onClick={() => navigate('/steps')}>
        Start Brewing →
      </button>
    </div>
  );
};

export default Home;
