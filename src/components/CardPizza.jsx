import PropTypes from 'prop-types';

const CardPizza = ({ name, price, ingredients, img }) => (
  <div className="card h-100">
    <img 
      src={img} 
      className="card-img-top" 
      alt={name} 
    />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="text-center mb-2">Ingredientes:</p>
      <p className="card-text text-center small">{ingredients}</p>
      <p className="text-center precio">Precio: ${price.toLocaleString()}</p>
      <div className="d-flex justify-content-between">
        <button className="btn btn-dark">Ver Más 👀</button>
        <button className="btn btn-outline-success">Añadir 🛒</button>
      </div>
    </div>
  </div>
);

CardPizza.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ingredients: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

export default CardPizza;