import { useState, useEffect } from 'react';
import { createOrder, getOrdersByCustomerEmail } from '../service/api';

/**
 * Hook to handle order creation.
 */
export const useCreateOrder = () => {
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  const handleCreateOrder = async (order) => {
    setLoading(true);
    setError(null);
    try {
      const response = await createOrder(order); // API call to create order
      return response;
    } catch (err) {
      setError(err.message || 'Error creating order');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { handleCreateOrder, loading, error };
};

/**
 * Hook to fetch orders by customer email.
 */
export const useOrders = (customerEmail) => {
  const [orders, setOrders] = useState([]); // Stores fetched orders
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    if (!customerEmail) return;

    const fetchOrders = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getOrdersByCustomerEmail(customerEmail); // API call to fetch orders
        setOrders(data);
      } catch {
        setError('Error fetching orders');
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, [customerEmail]);

  return { orders, isLoading, error };
};
