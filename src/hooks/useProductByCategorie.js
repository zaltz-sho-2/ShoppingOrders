import { useState, useEffect } from 'react';
import { fetchProductByCategories } from '../service/api';

/**
 * Custom hook for fetching products by categories.
 *
 * This hook handles API requests to fetch products grouped by categories 
 * and manages loading and error states.
 *
 * @returns {Object} An object containing:
 *   - productsByCategories: Array of products grouped by categories.
 *   - loading: Boolean indicating the loading state.
 *   - error: Error message, if the request fails.
 */
const useProductByCategories = () => {
  const [productsByCategories, setProductsByCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProductsByCategories = async () => {
      try {
        const data = await fetchProductByCategories();
        setProductsByCategories(data); // Update state with the fetched data
      } catch (err) {
        setError(err.message); // Handle errors by updating the error state
      } finally {
        setLoading(false); // Indicate that the loading process has completed
      }
    };

    loadProductsByCategories();
  }, []); // Empty dependency array to run only on component mount

  return { productsByCategories, loading, error };
};

export default useProductByCategories;
