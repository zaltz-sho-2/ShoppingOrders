import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";

// Styling for the container
export const StyledContainer = styled(Box)({
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

// Styling for the grid of products
export const StyledProductGrid = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  gap: "16px",
  justifyContent: "center",
  width: "100%",
});

// Styling for each product wrapper
export const StyledProductWrapper = styled(Box)({
  width: "100%",
  "@media (min-width: 600px)": {
    width: "45%",
  },
  "@media (min-width: 960px)": {
    width: "30%",
  },
});

// Styling for the checkout button
export const StyledCheckoutButton = styled(Button)({
  marginTop: "20px",
  borderRadius: "8px",
  fontSize: "16px",
  textTransform: "none",
  backgroundColor: "#1976d2",
  color: "white",
  "&:hover": {
    backgroundColor: "#115293",
  },
});
