import React, { useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useCreateOrder } from '../../hooks/useOrderHooks';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../../redux/cartSlice';
import BackHomeButton from '../../components/backHomeButton';
import {
  StyledCheckoutContainer,
  StyledOrderSummary,
  StyledProductCard,
  StyledSubmitOrderButton,
  StyledErrorMessage,
  StyledProductContainer,
} from './style'; // Importing styled components

const CheckoutPage = () => {
  const { totalQuantity, totalPrice, productsInCart } = useSelector((state) => state.cart);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false); // State to track email validity
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { handleCreateOrder, loading, error } = useCreateOrder(); // Using the custom hook for order creation

  // Handle email validation
  const handleEmailChange = (e) => {
    const email = e.target.value;
    setCustomerEmail(email);

    // Regex to validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
  };

  // Handle the order submission
  const handleSubmitOrder = async () => {
    const order = {
      CustomerName: customerName,
      CustomerEmail: customerEmail,
      CustomerAddress: customerAddress,
      Products: productsInCart.map(product => ({
        productId: product.productId,
        quantity: product.quantity,
      })),
    };

    try {
      const response = await handleCreateOrder(order);
      navigate('/new-order', { state: response }); // Navigate to the new order page with the response data
      dispatch(clearCart()); // Clear the cart after successful order
    } catch {
      alert('An error occurred while processing your order. Please try again.');
    }
  };

  // Check if all required fields are valid
  const isFormValid = isEmailValid && customerName.trim() !== '' && customerAddress.trim() !== '';

  return (
    <StyledCheckoutContainer>
      <Typography variant="h4" align="center" gutterBottom>
        Checkout
      </Typography>
      <BackHomeButton />

      {/* Order Summary */}
      <StyledOrderSummary>
        <Typography variant="h6">Order Summary:</Typography>
        <Typography variant="body1">Total Quantity: {totalQuantity}</Typography>
        <Typography variant="body1">Total Price: ₪{totalPrice.toFixed(2)}</Typography>

        {/* Displaying products in the cart */}
        <StyledProductContainer>
          {productsInCart.map((product) => (
            <StyledProductCard key={product.productId}>
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body2">Quantity: {product.quantity}</Typography>
              <Typography variant="body2">Price: ₪{(product.price * product.quantity).toFixed(2)}</Typography>
            </StyledProductCard>
          ))}
        </StyledProductContainer>
      </StyledOrderSummary>

      {/* Customer details form */}
      <Box style={{ marginTop: '20px' }}>
        <TextField
          label="Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Email"
          value={customerEmail}
          onChange={handleEmailChange} // Validate email on change
          fullWidth
          margin="normal"
          error={!isEmailValid && customerEmail.length > 0} // Show error if email is invalid
          helperText={!isEmailValid && customerEmail.length > 0 ? 'Invalid email address' : ''}
          required
        />
        <TextField
          label="Address"
          value={customerAddress}
          onChange={(e) => setCustomerAddress(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
      </Box>

      {/* Submit Button */}
      <StyledSubmitOrderButton
        variant="contained"
        onClick={handleSubmitOrder}
        fullWidth
        disabled={loading || !isFormValid} // Disable button if loading or form is invalid
      >
        {loading ? 'Processing...' : 'Submit Order'}
      </StyledSubmitOrderButton>

      {/* Display error message */}
      {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
    </StyledCheckoutContainer>
  );
};

export default CheckoutPage;
