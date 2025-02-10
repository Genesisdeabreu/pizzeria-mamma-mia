import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CardPizza = ({ id, name, price, ingredients, img, desc }) => {
  return (
    <div className="card pizza-card m-3">
      <img src={img} className="card-img-top pizza-img" alt={name} style={{ height: '200px', objectFit: 'cover' }} />
      <div className="card-body">
        <h5 className="card-title text-center">{name}</h5>
        <div className="card-text">
          <p className="ingredients-title text-center mb-2">Ingredientes:</p>
          <ul className="ingredients-list">
            {ingredients.map((ingredient, index) => (
              <li key={index}>🍕 {ingredient}</li>
            ))}
          </ul>
          <p className="description">{desc}</p>
        </div>
        <div className="price-section text-center mt-3">
          <p className="price mb-3">Precio: ${price.toLocaleString()}</p>
          <div className="d-flex justify-content-around">
            <Link to={`/pizza/${id}`} className="btn btn-outline-success">
              Ver más 👀
            </Link>
            <button className="btn btn-secondary">Añadir 🛒</button>
          </div>
        </div>
      </div>
    </div>
  );
};

CardPizza.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  img: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};

export default CardPizza;