import { styled } from '@mui/material/styles';
import { Card, Button, Typography, Box } from '@mui/material';

// Styling for the card
export const StyledCard = styled(Card)(({ theme }) => ({
    maxWidth: 300,
    margin: '15px',
    padding: '15px',
    borderRadius: '15px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 6px 25px rgba(0, 0, 0, 0.15)',
    },
}));

// Styling for the button container
export const StyledButtonContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15px',
});

// Styling for buttons
export const StyledButton = styled(Button)(({ theme }) => ({
    margin: '0 10px',
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    '&:hover': {
        backgroundColor: theme.palette.primary.light,
        color: 'white',
    },
}));

// Styling for the quantity display
export const StyledQuantity = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    color: theme.palette.text.primary,
}));
