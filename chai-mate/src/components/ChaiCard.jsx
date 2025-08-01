// src/components/ChaiCard.jsx
import React from "react";
import "./ChaiCard.css";

const ChaiCard = ({ title, img }) => {
  return (
    <div className="chai-card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <button>Done ✅</button>
    </div>
  );
};

export default ChaiCard;
