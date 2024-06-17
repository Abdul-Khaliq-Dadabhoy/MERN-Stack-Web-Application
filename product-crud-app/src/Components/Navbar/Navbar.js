import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Product List</Link>
        </li>
        <li>
          <Link to="/create-product">Create Product</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
