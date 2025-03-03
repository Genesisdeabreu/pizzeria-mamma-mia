import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { pizzaService } from '../services/pizzaService';
import { useCart } from '../context/CartContext';

const PizzaDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    loadPizza();
  }, [id]);

  const loadPizza = async () => {
    try {
      const data = await pizzaService.getPizzaById(id);
      setPizza(data);
    } catch (err) {
      setError('Error al cargar la pizza');
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    try {
      addToCart(pizza, quantity);
      navigate('/cart');  // Cambiado a '/cart' si esa es tu ruta correcta
    } catch (err) {
      setError('Error al agregar al carrito');
    }
  };

  if (loading) return <div className="text-center mt-5">Cargando...</div>;
  if (error) return <div className="alert alert-danger m-3">{error}</div>;
  if (!pizza) return <div className="alert alert-warning m-3">Pizza no encontrada</div>;

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="row g-0">
          <div className="col-md-6">
            <img src={pizza.img} className="img-fluid rounded-start" alt={pizza.name} />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h2 className="card-title">{pizza.name}</h2>
              <p className="card-text">{pizza.description}</p>
              <h4 className="mb-3">Ingredientes:</h4>
              <ul className="list-unstyled">
                {pizza.ingredients?.map((ingredient, index) => (
                  <li key={index}>🍕 {ingredient}</li>
                ))}
              </ul>
              <div className="d-flex align-items-center mb-3">
                <h3 className="me-3">${pizza.price}</h3>
                <div className="input-group" style={{ width: '200px' }}>
                  <button 
                    className="btn btn-outline-secondary px-3 fs-5"
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <input 
                    type="number" 
                    className="form-control text-center fs-5"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    style={{ width: '80px' }}
                  />
                  <button 
                    className="btn btn-outline-secondary px-3 fs-5"
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <button 
                className="btn btn-success w-100 py-2 fs-5"
                onClick={handleAddToCart}
              >
                Agregar al Carrito 🛒
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaDetail;