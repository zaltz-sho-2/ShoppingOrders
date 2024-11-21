import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledButton } from './style';

const ViewOrdersButton = ({ customerEmail, disabled }) => {
  const navigate = useNavigate();

  const handleNavigateToOrders = () => {
    navigate('/orders', { state: { customerEmail } });
  };

  return (
    <StyledButton
      variant="contained"
      disabled={disabled}
      onClick={handleNavigateToOrders}
    >
      View All Orders
    </StyledButton>
  );
};

export default ViewOrdersButton;
