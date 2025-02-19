import { createContext, useState, useContext, useEffect } from 'react';

const PizzaContext = createContext();

export function PizzaProvider({ children }) {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cargar todas las pizzas
  const fetchPizzas = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/pizzas');
      if (!response.ok) {
        throw new Error('Error al cargar las pizzas');
      }
      const data = await response.json();
      setPizzas(data);
      setError(null);
    } catch (error) {
      console.error('Error:', error);
      setError('No se pudieron cargar las pizzas');
    } finally {
      setLoading(false);
    }
  };

  // Obtener una pizza por ID
  const getPizzaById = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
      if (!response.ok) {
        throw new Error('Pizza no encontrada');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Cargar pizzas al montar el componente
  useEffect(() => {
    fetchPizzas();
  }, []);

  const value = {
    pizzas,
    loading,
    error,
    getPizzaById,
    fetchPizzas
  };

  return (
    <PizzaContext.Provider value={value}>
      {children}
    </PizzaContext.Provider>
  );
}

// Hook personalizado
export function usePizza() {
  const context = useContext(PizzaContext);
  if (!context) {
    throw new Error('usePizza debe ser usado dentro de un PizzaProvider');
  }
  return context;
}