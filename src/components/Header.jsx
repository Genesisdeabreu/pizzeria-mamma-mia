import React from 'react';
import headerImage from '../assets/header.jpg';  

const Header = () => (
  <header 
    className="text-center py-5 text-white header-bg"
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${headerImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '400px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }}
  >
    <h1 className="display-4">¡Pizzería Mamma Mía!</h1>
    <p className="lead">¡Las mejores pizzas que podrás encontrar!</p>
  </header>
);

export default Header;