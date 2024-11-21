import { Box, styled, Typography } from "@mui/material";

// Main container for the page
export const StyledContainer = styled(Box)(({ theme }) => ({
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));
export const StyledButton = styled('div')(({ theme }) => ({
    padding: "20px",
    gap: "20px",
  }));
// Loading container for when data is being fetched
export const StyledLoadingContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "50px",
}));

// Card for individual orders
export const StyledOrderCard = styled(Box)(({ theme }) => ({
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "15px",
  marginBottom: "20px",
  boxShadow: theme.shadows[2],
  backgroundColor: theme.palette.background.paper,
}));

// Error message
export const StyledErrorMessage = styled(Typography)(({ theme }) => ({
  color: "red",
  textAlign: "center",
  marginTop: "50px",
  fontWeight: "bold",
}));

// Message displayed when no orders are found
export const StyledNoOrdersMessage = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  marginTop: "20px",
  fontSize: "18px",
  fontStyle: "italic",
  color: theme.palette.text.secondary,
}));
