import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import pizzaNapolitana from '../assets/pizza-napolitana.jpg';
import pizzaEspanola from '../assets/pizza-espanola.jpg';
import pizzaPepperoni from '../assets/pizza-pepperoni.jpg';

const Home = () => (
  <>
    <Header />
    <div className="container mt-5">
      <div className="row g-4">
        <div className="col-12 col-md-4">
          <CardPizza
            name="Pizza Napolitana"
            price={5950}
            ingredients="🍕 mozzarella, tomates, jamón, orégano"
            img={pizzaNapolitana}
          />
        </div>
        <div className="col-12 col-md-4">
          <CardPizza
            name="Pizza Española"
            price={6950}
            ingredients="🍕 mozzarella, gorgonzola, parmesano, provolone"
            img={pizzaEspanola}
          />
        </div>
        <div className="col-12 col-md-4">
          <CardPizza
            name="Pizza Pepperoni"
            price={6950}
            ingredients="🍕 mozzarella, pepperoni, orégano"
            img={pizzaPepperoni}
          />
        </div>
      </div>
    </div>
  </>
);

export default Home;