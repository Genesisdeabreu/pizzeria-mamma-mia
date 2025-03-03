import axiosInstance from '../config/axios';

export const checkoutService = {
  checkout: async (cartItems, shippingDetails) => {
    try {
      const response = await axiosInstance.post('/checkout', {
        items: cartItems,
        shipping: shippingDetails,
        orderDate: new Date().toISOString()
      });
      return response.data;
    } catch (error) {
      throw new Error('Error al procesar el pago');
    }
  },

  getOrderHistory: async () => {
    try {
      const response = await axiosInstance.get('/orders');
      return response.data;
    } catch (error) {
      throw new Error('Error al obtener historial de órdenes');
    }
  },

  getOrderById: async (orderId) => {
    try {
      const response = await axiosInstance.get(`/orders/${orderId}`);
      return response.data;
    } catch (error) {
      throw new Error('Error al obtener la orden');
    }
  },

  cancelOrder: async (orderId) => {
    try {
      const response = await axiosInstance.post(`/orders/${orderId}/cancel`);
      return response.data;
    } catch (error) {
      throw new Error('Error al cancelar la orden');
    }
  }
};