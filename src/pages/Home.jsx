import React, { useState, useEffect } from 'react';
import CardPizza from '../components/CardPizza';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas');
        if (!response.ok) {
          throw new Error('Error al cargar las pizzas');
        }
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error('Error:', error);
        setError('No se pudieron cargar las pizzas');
      } finally {
        setLoading(false);
      }
    };

    fetchPizzas();
  }, []);

  if (loading) return <div className="text-center mt-5">Cargando pizzas...</div>;
  if (error) return <div className="text-center mt-5 text-danger">{error}</div>;

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">¡Bienvenido a Pizzería Mamma Mia!</h1>
      <div className="row justify-content-center">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="col-12 col-md-6 col-lg-4 mb-4">
            <CardPizza
              id={pizza.id}
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