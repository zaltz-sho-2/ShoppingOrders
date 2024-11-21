import { styled } from '@mui/system';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

// Styled component for AppBar
export const StyledAppBar = styled(AppBar)({
  backgroundColor: '#3f51b5', // Primary theme color
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow effect
});

// Styled component for Toolbar
export const StyledToolbar = styled(Toolbar)({
  display: 'flex', // Use flex layout for alignment
  justifyContent: 'space-between', // Spread content across the toolbar
  alignItems: 'center', // Center items vertically
  // gap: '16px', // Add spacing between elements
});

// Styled component for the application title
export const StyledTitle = styled(Typography)({
  color: '#fff', // White text color for contrast
  fontWeight: 'bold', // Bold text for emphasis
  flexGrow: 1, // Push the title to occupy available space
});

// Styled component for the shopping cart section
export const StyledCartInfo = styled(Box)({
  display: 'flex', // Align items horizontally
  alignItems: 'center', // Center items vertically
  gap: '8px', // Add spacing between the badge and icon
});
