import axiosInstance from '../config/axios';

export const pizzaService = {
  getAllPizzas: async () => {
    try {
      const response = await axiosInstance.get('/pizzas');
      return response.data;
    } catch (error) {
      throw new Error('Error al obtener las pizzas');
    }
  },

  getPizzaById: async (id) => {
    try {
      const response = await axiosInstance.get(`/pizzas/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Error al obtener la pizza');
    }
  },

  createPizza: async (pizzaData) => {
    try {
      const response = await axiosInstance.post('/pizzas', pizzaData);
      return response.data;
    } catch (error) {
      throw new Error('Error al crear la pizza');
    }
  },

  updatePizza: async (id, pizzaData) => {
    try {
      const response = await axiosInstance.put(`/pizzas/${id}`, pizzaData);
      return response.data;
    } catch (error) {
      throw new Error('Error al actualizar la pizza');
    }
  },

  deletePizza: async (id) => {
    try {
      const response = await axiosInstance.delete(`/pizzas/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Error al eliminar la pizza');
    }
  }
};