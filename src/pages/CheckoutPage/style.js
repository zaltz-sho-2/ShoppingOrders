import { styled } from '@mui/material/styles';
import { Box, Button, Typography } from '@mui/material';

export const StyledCheckoutContainer = styled(Box)({
  padding: '20px',
});

export const StyledOrderSummary = styled(Box)({
  marginTop: '20px',
});

export const StyledProductContainer = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '16px',
  marginTop: '20px',
});

export const StyledProductCard = styled(Box)({
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  textAlign: 'center',
  backgroundColor: '#f9f9f9',
});

export const StyledSubmitOrderButton = styled(Button)({
  marginTop: '20px',
});

export const StyledErrorMessage = styled(Typography)({
  color: 'red',
  marginTop: '10px',
});
