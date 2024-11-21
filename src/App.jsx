import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterFranchise from './RegisterFranchise';
import AllFranchise from './AllFranchise';
import Navbar from './Navbar';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<AllFranchise/>} />
        <Route path="/register" element={<RegisterFranchise />} />
      </Routes>
    </Router>
  );
};

export default App;
