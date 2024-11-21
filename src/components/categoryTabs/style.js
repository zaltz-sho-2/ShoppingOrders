import { styled } from "@mui/system";
import { Box } from "@mui/material";

// Custom styled Box component without using theme
export const StyledBox = styled(Box)({
    backgroundColor: "#f4f6f8", // Set a default background color
    padding: "16px", // Set padding manually
    borderRadius: "8px", // Rounded corners
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow for the box
    margin: "16px", // External margin to separate from other components
});
