import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/cartSlice';
import { CardContent, Typography } from '@mui/material';
import { StyledCard, StyledButtonContainer, StyledButton, StyledQuantity } from './style';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const productsInCart = useSelector((state) => state.cart.productsInCart);

  // Find the product in the cart
  const productInCart = productsInCart?.find(item => item.productId === product.Id);
  const quantity = productInCart ? productInCart.quantity : 0; // The quantity of the product in the cart

  // Handles increasing the quantity of the product
  const handleIncrease = () => {
    dispatch(addToCart({ productId: product.Id, price: product.Price, name: product.Name }));
  };

  // Handles decreasing the quantity of the product
  const handleDecrease = () => {
    if (quantity > 0) {
      dispatch(removeFromCart({ productId: product.Id, price: product.Price }));
    }
  };

  return (
    <StyledCard>
      <CardContent>
        {/* Product name */}
        <Typography variant="h6" align="center">{product?.Name}</Typography>
        {/* Product price */}
        <Typography variant="body1" align="center">Price: ₪{product?.Price}</Typography>
        {/* Quantity controls */}
        <StyledButtonContainer>
          <StyledButton onClick={handleDecrease} variant="outlined">-</StyledButton>
          <StyledQuantity variant="h6">{quantity}</StyledQuantity> {/* Display the quantity */}
          <StyledButton onClick={handleIncrease} variant="outlined">+</StyledButton>
        </StyledButtonContainer>
      </CardContent>
    </StyledCard>
  );
};

export default ProductCard;
