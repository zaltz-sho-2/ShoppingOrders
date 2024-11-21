import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

// Main container for the HomePage
export const StyledHomePageContainer = styled(Box)({
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "30px",
});

// Styled section to structure content within the page
export const StyledSection = styled(Box)(({ maxWidth }) => ({
  width: "100%",
  maxWidth: maxWidth || "none", // Apply maxWidth only if provided
}));
