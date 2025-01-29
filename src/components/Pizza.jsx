import React, { useState, useEffect } from 'react';

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas/p001');
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error('Error fetching pizza:', error);
      }
    };

    fetchPizza();
  }, []);

  if (!pizza) return <div>Cargando...</div>;

  return (
    <div className="container mt-5">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-6">
            <img src={pizza.img} className="img-fluid rounded-start" alt={pizza.name} />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h2 className="card-title">{pizza.name}</h2>
              <p className="card-text">{pizza.desc}</p>
              <h5>Ingredientes:</h5>
              <ul className="ingredients-list">
                  {pizza.ingredients.map((ingredient, index) => (
                  <li key={index}>🍕 {ingredient}</li>
                ))}
              </ul>
              <div className="d-flex justify-content-between align-items-center">
                <h4>Precio: ${pizza.price}</h4>
                <button className="btn btn-danger">Añadir al carrito</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;