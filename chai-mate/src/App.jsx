import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import StepOne from './components/StepOne';

function App() {
  return (
    <BrowserRouter basename="/A-Perfect-DESI-CHAI">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/steps" element={<StepOne />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
