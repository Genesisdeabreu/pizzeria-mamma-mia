import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotal } = useCart();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP'
    }).format(price);
  };

  if (cart.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h2>Carrito de Compras</h2>
        <p>Tu carrito está vacío</p>
        <Link to="/" className="btn btn-primary">
          Ir a comprar 🍕
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Carrito de Compras</h2>
      <div className="row">
        <div className="col-md-8">
          {cart.map((item) => (
            <div key={item.id} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={item.img}
                    className="img-fluid rounded-start"
                    alt={item.name}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">
                      <small className="text-muted">
                        Precio unitario: {formatPrice(item.price)}
                      </small>
                    </p>
                    <div className="d-flex align-items-center gap-2">
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                      <button
                        className="btn btn-danger btn-sm ms-3"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Eliminar
                      </button>
                    </div>
                    <p className="card-text mt-2">
                      <strong>
                        Subtotal: {formatPrice(item.price * item.quantity)}
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Resumen del pedido</h5>
              <hr />
              {cart.map((item) => (
                <div key={item.id} className="d-flex justify-content-between mb-2">
                  <span>{item.name} x{item.quantity}</span>
                  <span>{formatPrice(item.price * item.quantity)}</span>
                </div>
              ))}
              <hr />
              <div className="d-flex justify-content-between">
                <h5>Total:</h5>
                <h5>{formatPrice(getTotal())}</h5>
              </div>
              <button className="btn btn-success w-100 mt-3">
                Ir a Pagar 💳
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;