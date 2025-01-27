import React from 'react';
import { pizzas } from './pizzas';
import CardPizza from './CardPizza';

const Home = () => {
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