// src/App.jsx
import React from "react";
import "./App.css";
import ChaiCard from "./components/ChaiCard";
import boilImg from "./assets/step1.png";
import milkImg from "./assets/step2.png";
import teaImg from "./assets/step3.png";
import sugarImg from "./assets/step4.png";
import serveImg from "./assets/step5.png";

const steps = [
  { title: "Boil Water", img: boilImg },
  { title: "Add Milk", img: milkImg },
  { title: "Add Tea Leaves", img: teaImg },
  { title: "Add Sugar", img: sugarImg },
  { title: "Serve Hot", img: serveImg },
];

function App() {
  return (
    <div className="app">
      <h1>Chai-Mate 🍵</h1>
      <div className="phone-container">
        {steps.map((step, index) => (
          <ChaiCard key={index} title={step.title} img={step.img} />
        ))}
      </div>
    </div>
  );
}

export default App;




// cd A-Perfect-DESI-CHAI