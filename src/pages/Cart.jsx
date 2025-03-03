import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { checkoutService } from '../services/checkoutService';

const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, getTotal, clearCart } = useCart();
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleCheckout = async () => {
    setCheckoutLoading(true);
    setError('');
    setSuccess(false);
    try {
      await checkoutService.checkout(cart);
      setSuccess(true);
      clearCart();
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (err) {
      setError('Error al procesar el pago');
    } finally {
      setCheckoutLoading(false);
    }
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
    } else {
      updateQuantity(itemId, newQuantity);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">🛒 Carrito de Compras</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && (
        <div className="alert alert-success">
          ¡Compra realizada con éxito! Redirigiendo...
        </div>
      )}
      
      {cart.length === 0 ? (
        <div className="alert alert-info">
          Tu carrito está vacío. <button 
            className="btn btn-link"
            onClick={() => navigate('/')}
          >
            ¡Agrega algunas pizzas!
          </button>
        </div>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-2">
                  <img src={item.img} className="img-fluid rounded-start" alt={item.name} />
                </div>
                <div className="col-md-10">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="card-title">{item.name}</h5>
                      <button 
                        className="btn btn-danger btn-sm"
                        onClick={() => removeFromCart(item.id)}
                      >
                        ✖
                      </button>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <div className="input-group" style={{ width: '200px' }}>
                        <button 
                          className="btn btn-outline-secondary px-3 fs-5"
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <input 
                          type="number" 
                          className="form-control text-center fs-5"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 0)}
                          style={{ width: '80px' }}
                        />
                        <button 
                          className="btn btn-outline-secondary px-3 fs-5"
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <h5 className="mb-0">${item.price * item.quantity}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <div className="card mt-4">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <h4>Total:</h4>
                <h4>${getTotal()}</h4>
              </div>
              <button 
                className="btn btn-success w-100 mt-3 py-2 fs-5"
                onClick={handleCheckout}
                disabled={checkoutLoading}
              >
                {checkoutLoading ? 'Procesando pago...' : 'Proceder al Pago 💳'}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;