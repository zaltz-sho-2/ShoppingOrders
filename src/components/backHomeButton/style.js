import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

// Button style for consistent design and custom appearance.
export const StyledButton = styled(Button)(({ theme }) => ({
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
}));
