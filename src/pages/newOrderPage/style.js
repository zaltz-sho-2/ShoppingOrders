import { Box, styled, Typography } from '@mui/material';

// Main container for the page
export const StyledContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between', // Push content to the top and buttons to the bottom
    minHeight: '90vh', // Full viewport height
    padding: '20px',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '8px',
    maxWidth: '600px',
    margin: '0 auto',

}));

// Section for order details
export const StyledSection = styled(Box)(({ theme }) => ({
    marginTop: '20px',
    padding: '10px',
    backgroundColor: theme.palette.background.default,
    borderRadius: '8px',
    boxShadow: theme.shadows[1],
}));

// Styling for individual product text
export const StyledProductText = styled(Typography)(({ theme }) => ({
    marginTop: '5px',
    color: theme.palette.text.secondary,
}));

// Container for buttons
export const StyledButtonsContainer = styled(Box)(({ theme }) => ({
    marginTop: 'auto', // Push to the bottom
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
}));
