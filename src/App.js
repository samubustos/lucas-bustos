// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Contact from './pages/Contact';
import './index.css';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <Routes>
          <Route path="/lucas-bustos" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
