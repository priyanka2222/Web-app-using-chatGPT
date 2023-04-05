// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Women from "./Components/Women";
import Men from "./Components/Men";
import Kids from "./Components/Kids";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/women">Women's Clothing</Link>
            </li>
            <li>
              <Link to="/men">Men's Clothing</Link>
            </li>
            <li>
              <Link to="/kid">Kid's Clothing</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/women" element={<Women />} />
          <Route path="/men" element={<Men />} />
          <Route path="/kid" element={<Kids />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;