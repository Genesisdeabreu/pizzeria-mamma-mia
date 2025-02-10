import React, { useState } from 'react';
import { pizzaCart } from '../components/pizzas';

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const handleIncrement = (id) => {
    setCart(cart.map(pizza => 
      pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
    ));
  };

  const handleDecrement = (id) => {
    setCart(cart.map(pizza => 
      pizza.id === id && pizza.count > 0 
        ? { ...pizza, count: pizza.count - 1 } 
        : pizza
    ).filter(pizza => pizza.count > 0));
  };

  const total = cart.reduce((sum, pizza) => sum + (pizza.price * pizza.count), 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Detalles del pedido:</h2>
      <div className="cart-items">
        {cart.map((pizza) => (
          <div key={pizza.id} className="cart-item">
            <img src={pizza.img} alt={pizza.name} className="cart-item-img" />
            <div className="cart-item-name">{pizza.name}</div>
            <div className="cart-item-price">${pizza.price.toLocaleString()}</div>
            <div className="cart-item-controls">
              <button 
                className="quantity-btn decrease" 
                onClick={() => handleDecrement(pizza.id)}
              >
                -
              </button>
              <span className="quantity">{pizza.count}</span>
              <button 
                className="quantity-btn increase" 
                onClick={() => handleIncrement(pizza.id)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Total: ${total.toLocaleString()}</h3>
        <button className="pay-button">Pagar</button>
      </div>
    </div>
  );
};

export default Cart;