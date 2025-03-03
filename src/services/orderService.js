import api from './api';

export const orderService = {
  async getOrders() {
    try {
      const { data } = await api.get('/orders');
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.error || 'Error al obtener los pedidos');
    }
  }
};