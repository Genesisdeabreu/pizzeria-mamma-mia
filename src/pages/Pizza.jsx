import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { usePizza } from '../context/PizzaContext';
import { useCart } from '../context/CartContext';

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const { loading, error: contextError, getPizzaById } = usePizza();
  const { addToCart } = useCart();
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const loadPizza = async () => {
      try {
        const data = await getPizzaById(id);
        setPizza(data);
      } catch (err) {
        setError('No se pudo cargar la pizza');
      }
    };

    loadPizza();
  }, [id, getPizzaById]);

  if (loading) return <div className="text-center mt-5">Cargando...</div>;
  if (error || contextError) return <div className="text-center mt-5 text-danger">{error || contextError}</div>;
  if (!pizza) return <div className="text-center mt-5">Pizza no encontrada</div>;

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="row g-0">
          <div className="col-md-6">
            <img src={pizza.img} className="img-fluid rounded-start" alt={pizza.name} />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h3 className="card-title">{pizza.name}</h3>
              <p className="card-text">{pizza.desc}</p>
              <h4>Ingredientes:</h4>
              <ul className="list-unstyled">
                {pizza.ingredients.map((ingredient, index) => (
                  <li key={index}>🍕 {ingredient}</li>
                ))}
              </ul>
              <p className="fs-3">Precio: ${pizza.price.toLocaleString()}</p>
              <button 
                className="btn btn-danger"
                onClick={() => addToCart(pizza)}
              >
                Añadir al Carrito 🛒
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;