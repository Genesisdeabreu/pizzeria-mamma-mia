import axiosInstance from '../config/axios';

const login = async (credentials) => {
  try {
    const response = await axiosInstance.post('/auth/login', credentials);
    return response.data;
  } catch (error) {
    if (error.response?.status === 401) {
      throw new Error('Credenciales incorrectas');
    }
    throw error;
  }
};

const register = async (userData) => {
  try {
    const response = await axiosInstance.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    if (error.response?.status === 409) {
      throw new Error('El usuario ya existe');
    }
    throw error;
  }
};

const getProfile = async () => {
  try {
    const response = await axiosInstance.get('/auth/me');
    return response.data;
  } catch (error) {
    if (error.response?.status === 401) {
      throw new Error('Sesión expirada');
    }
    throw error;
  }
};

export const authService = {
  login,
  register,
  getProfile
};