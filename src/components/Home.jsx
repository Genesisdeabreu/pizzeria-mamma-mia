import React, { useState, useEffect } from 'react';
import CardPizza from './CardPizza';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas');
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error('Error fetching pizzas:', error);
      }
    };

    fetchPizzas();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {pizzas.map(pizza => (
          <div key={pizza.id} className="col-12 col-md-6 col-lg-4">
            <CardPizza
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
              desc={pizza.desc}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;