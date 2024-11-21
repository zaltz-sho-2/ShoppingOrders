import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

// Styled component for the button with custom styles
export const StyledButton = styled(Button)(({ theme, disabled }) => ({
    borderRadius: '8px',
    padding: theme.spacing(1.5, 3),
    fontSize: '16px',
    textTransform: 'none',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    },

    // Apply custom styles when the button is disabled
    ...(disabled && {
        backgroundColor: '#b0bec5',
        color: '#9e9e9e',
        '&:hover': {
            backgroundColor: '#b0bec5',
        },
    }),
}));
