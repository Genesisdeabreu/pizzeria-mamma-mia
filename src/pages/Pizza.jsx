import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        if (!response.ok) {
          throw new Error('Pizza no encontrada');
        }
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error('Error:', error);
        setError('No se pudo cargar la pizza');
      } finally {
        setLoading(false);
      }
    };

    fetchPizza();
  }, [id]);

  if (loading) return <div className="text-center mt-5">Cargando...</div>;
  if (error) return <div className="text-center mt-5 text-danger">{error}</div>;
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
              <p className="fs-3">Precio: ${pizza.price}</p>
              <button className="btn btn-danger">
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