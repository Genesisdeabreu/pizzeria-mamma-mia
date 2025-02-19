import React from 'react';
import CardPizza from '../components/CardPizza';
import { usePizza } from '../context/PizzaContext';

const Home = () => {
  const { pizzas, loading, error } = usePizza();

  if (loading) return <div className="text-center mt-5">Cargando pizzas...</div>;
  if (error) return <div className="text-center mt-5 text-danger">{error}</div>;

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">¡Bienvenido a Pizzería Mamma Mia!</h1>
      <div className="row justify-content-center">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="col-12 col-md-6 col-lg-4 mb-4">
            <CardPizza {...pizza} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;