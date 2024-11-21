import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

// Wrapper for the entire component
export const StyledWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column', // Ensures the text is above the input and button
  alignItems: 'center',
  gap: '20px',
  marginTop: '20px',
}));

// Styled container for input and button
export const StyledContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  width: '100%', // Ensures proper alignment
}));

// Styled text for the instruction
export const StyledInstructionText = styled(Typography)(() => ({
  fontSize: '18px',
  textAlign: 'center',
}));
