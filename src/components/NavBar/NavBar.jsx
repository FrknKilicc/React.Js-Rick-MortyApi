import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const linkStyle = {
    textDecoration: 'none',
    fontSize: '150%',
  };

  return (
    <nav>
      <Link to="/episode" style={linkStyle}>
        <button>Episode</button>
      </Link>
      <Link to="/location" style={linkStyle}>
        <button>Location</button>
      </Link>
    </nav>
  );
};

export default NavBar;
