import React from 'react';
import { Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import BackHomeButton from '../../components/backHomeButton';
import ViewOrdersButton from '../../components/viewOrdersButton';
import {
  StyledContainer,
  StyledSection,
  StyledProductText,
  StyledButtonsContainer,
} from './style'; // Importing styled components

const NewOrderPage = () => {
  const location = useLocation();
  const order = location.state; // Retrieve order details from the location state

  // If no order details are provided, display a fallback message
  if (!order) {
    return <Typography variant="h6">No order details available</Typography>;
  }

  return (
    <StyledContainer>
      {/* Header */}
      <Typography variant="h4" align="center" gutterBottom>
        Your order has been sent successfully!      </Typography>

      {/* Order Details Section */}
      <StyledSection>
        <Typography variant="h6">Order Details:</Typography>
        <Typography variant="body1">Order ID: {order.Id}</Typography>
        <Typography variant="body1">Customer Name: {order.CustomerName}</Typography>
        <Typography variant="body1">Customer Email: {order.CustomerEmail}</Typography>
        <Typography variant="body1">Customer Address: {order.CustomerAddress}</Typography>
        <Typography variant="body1">Order Date: {new Date(order.OrderDate).toLocaleString()}</Typography>
        <Typography variant="body1">Total Price: ₪{order?.TotalPrice?.toFixed(2)}</Typography>
      </StyledSection>

      {/* Products Section */}
      <Typography variant="h6" style={{ marginTop: '20px' }}>
        Products:
      </Typography>
      {order?.Products?.map(product => (
        <StyledProductText key={product.productId}>
          {product.ProductName} - Quantity: {product.Quantity} - Price: ₪{product?.Price?.toFixed(2)}
        </StyledProductText>
      ))}

      {/* Buttons Section */}
      <StyledButtonsContainer>
        <ViewOrdersButton customerEmail={order.CustomerEmail} />
        <BackHomeButton />
      </StyledButtonsContainer>
    </StyledContainer>
  );
};

export default NewOrderPage;
