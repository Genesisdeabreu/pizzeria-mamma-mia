import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import { CartProvider } from './context/CartContext';
import { PizzaProvider } from './context/PizzaContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PizzaProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </PizzaProvider>
    </BrowserRouter>
  </React.StrictMode>
);