import React from 'react';
import CardPizza from '../components/CardPizza';
import { usePizza } from '../context/PizzaContext';
import Header from '../components/Header';

const Home = () => {
  const { pizzas, loading, error } = usePizza();

  if (loading) return <div className="text-center mt-5">Cargando pizzas...</div>;
  if (error) return <div className="text-center mt-5 text-danger">{error}</div>;

  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row justify-content-center">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="col-12 col-md-6 col-lg-4 mb-4">
              <CardPizza {...pizza} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;