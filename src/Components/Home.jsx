import React from 'react';
import { Link } from 'react-router-dom';
// import Women from "./Components/Women";
import "../Css/styles.css";

function Home() {
  return (
    <div>
      <h1>Welcome to My Clothes Shop</h1>
      <p>Find the latest fashion trends here!</p>
      <ul>
        <li>
          <Link to="/men">Men's Clothing</Link>
        </li>
        <li>
          <Link to="/women">Women's Clothing</Link>
        </li>
        <li>
          <Link to="/kids">Kids' Clothing</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;