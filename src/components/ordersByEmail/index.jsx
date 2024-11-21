import React, { useState } from 'react';
import { TextField } from '@mui/material';
import ViewOrdersButton from '../viewOrdersButton';
import { StyledContainer, StyledInstructionText, StyledWrapper } from './style';

const OrdersByEmail = () => {
  const [email, setEmail] = useState('');
  const isValidEmail = email.trim().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/); // Validate inline without extra state

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <StyledWrapper>
      {/* Instruction text */}
      <StyledInstructionText>
        Please enter your email to view your orders.
      </StyledInstructionText>
      <StyledContainer>
        <TextField
          label="Enter Email"
          variant="outlined"
          value={email}
          onChange={handleEmailChange}
          fullWidth
          error={!isValidEmail && email !== ''} // Error only if user has entered invalid input
          helperText={
            !isValidEmail && email !== ''
              ? 'Please enter a valid email address.'
              : ''
          }
        />
        {/* View Orders Button, automatically disables if email invalid */}
        <ViewOrdersButton customerEmail={email} disabled={!isValidEmail} />
      </StyledContainer>
    </StyledWrapper>
  );
};

export default OrdersByEmail;
