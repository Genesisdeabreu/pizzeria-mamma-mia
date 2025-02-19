import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CardPizza = ({ id, name, price, ingredients, img, desc }) => {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP'
    }).format(price);
  };

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart({ 
      id, 
      name, 
      price, 
      img, 
      desc,
      ingredients 
    });
    
    // Efecto visual temporal
    setTimeout(() => setIsAdding(false), 500);
  };
  
  return (
    <div className="card pizza-card m-3">
      <img src={img} className="card-img-top pizza-img" alt={name} style={{ height: '200px', objectFit: 'cover' }} />
      <div className="card-body">
        <h5 className="card-title text-center">{name}</h5>
        <hr />
        <p className="card-text">
          <strong>Ingredientes:</strong>
        </p>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <div className="price-section text-center mt-3">
          <p className="price mb-3">Precio: {formatPrice(price)}</p>
          <div className="d-flex justify-content-around">
            <Link to={`/pizza/${id}`} className="btn btn-outline-success">
              Ver más 👀
            </Link>
            <button 
              className={`btn ${isAdding ? 'btn-success' : 'btn-secondary'}`}
              onClick={handleAddToCart}
              disabled={isAdding}
            >
              {isAdding ? 'Añadido ✓' : 'Añadir 🛒'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CardPizza.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  img: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};

export default CardPizza;