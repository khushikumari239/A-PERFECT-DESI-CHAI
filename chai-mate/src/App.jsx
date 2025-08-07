

// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import StepOne from './components/StepOne';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/steps" element={<StepOne />} />
      </Routes>
    </Router>
  );
}

export default App;


  
// (base) PS C:\Users\User\OneDrive\Desktop\A-Perfect-DESI-CHAI> cd A-perfect-DESI-CHAI
// (base) PS C:\Users\User\OneDrive\Desktop\A-Perfect-DESI-CHAI\A-perfect-DESI-CHAI> cd chai-mate
// (base) PS C:\Users\User\OneDrive\Desktop\A-Perfect-DESI-CHAI\A-perfect-DESI-CHAI\chai-mate> 





















// cd A-Perfect-DESI-CHAI