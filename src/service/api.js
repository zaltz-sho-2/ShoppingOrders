import axios from 'axios';
const API_BASE_URL = 'https://localhost:7246/api';

export const fetchProductByCategories = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/product/by-categories`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch categories');
  }
};

export const createOrder = async (orderData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/order`, orderData, {
      headers: { 'Content-Type': 'application/json' }
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to create order');
  }
};

export const getOrdersByCustomerEmail = async (customerEmail) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/order/by-email`, {
      params: { customerEmail }
    });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch orders:', error);
    throw error;
  }
};
