import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { checkoutService } from '../services/checkoutService';

const Checkout = () => {
  const { cart, getTotal, clearCart } = useCart();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleCheckout = async () => {
    setLoading(true);
    setError('');
    
    try {
      const orderData = {
        items: cart.map(item => ({
          id: item.id,
          quantity: item.quantity,
          price: item.price,
          name: item.name
        })),
        total: getTotal(),
        userId: user.id,
        shippingDetails: {
          name: user.name,
          email: user.email
        }
      };

      await checkoutService.checkout(orderData);
      clearCart();
      navigate('/success', { 
        state: { 
          message: '¡Pedido realizado con éxito!',
          orderId: new Date().getTime() // ID temporal
        }
      });
    } catch (err) {
      setError('Error al procesar el pedido. Por favor, intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="container mt-4">
        <div className="alert alert-info">
          Tu carrito está vacío. <a href="/">Volver a la tienda</a>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>Finalizar Compra</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      
      <div className="row">
        <div className="col-md-8">
          <div className="card mb-4">
            <div className="card-body">
              <h5>Detalles de Envío</h5>
              <p><strong>Nombre:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5>Resumen del Pedido</h5>
              
              {cart.map(item => (
                <div key={item.id} className="d-flex justify-content-between align-items-center mb-2">
                  <span>{item.name} x {item.quantity}</span>
                  <span>${item.price * item.quantity}</span>
                </div>
              ))}
              
              <hr />
              <div className="d-flex justify-content-between align-items-center mb-3">
                <strong>Total:</strong>
                <strong>${getTotal()}</strong>
              </div>

              <button 
                className="btn btn-success w-100" 
                onClick={handleCheckout}
                disabled={loading}
              >
                {loading ? 'Procesando...' : 'Confirmar Pedido'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;