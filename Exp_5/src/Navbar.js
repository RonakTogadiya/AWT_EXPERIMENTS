import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#333', padding: '10px' }}>
      <Link to="/" style={{ color: 'white', marginRight: '15px', textDecoration: 'none' }}>Home</Link>
      <Link to="/products" style={{ color: 'white', marginRight: '15px', textDecoration: 'none' }}>Products</Link>
      <Link to="/reviews" style={{ color: 'white', textDecoration: 'none' }}>Customer Reviews</Link>
    </nav>
  );
}

export default Navbar;
