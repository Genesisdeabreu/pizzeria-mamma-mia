import api from './api';

export const cartService = {
  async getCart() {
    try {
      const { data } = await api.get('/cart');
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.error || 'Error al obtener el carrito');
    }
  },

  async addToCart(pizzaId, quantity) {
    try {
      const { data } = await api.post('/cart', { pizzaId, quantity });
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.error || 'Error al agregar al carrito');
    }
  },

  async updateQuantity(itemId, quantity) {
    try {
      const { data } = await api.put(`/cart/${itemId}`, { quantity });
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.error || 'Error al actualizar cantidad');
    }
  },

  async removeFromCart(itemId) {
    try {
      await api.delete(`/cart/${itemId}`);
    } catch (error) {
      throw new Error(error.response?.data?.error || 'Error al eliminar del carrito');
    }
  }
};