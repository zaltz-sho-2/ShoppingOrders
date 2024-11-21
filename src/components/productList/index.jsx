import React from "react";
import ProductCard from "../productCard";
import { useNavigate } from "react-router-dom";
import { StyledContainer, StyledProductGrid, StyledProductWrapper, StyledCheckoutButton } from "./style";

const ProductList = ({ products }) => {
  const navigate = useNavigate(); // Enables navigation between pages

  // Navigates to the order summary page
  const handleCheckout = () => {
    navigate("/ordersummary");
  };

  return (
    <StyledContainer>
      {/* Display products in a grid */}
      <StyledProductGrid>
        {products.map((product) => (
          <StyledProductWrapper key={product.Id}>
            <ProductCard product={product} />
          </StyledProductWrapper>
        ))}
      </StyledProductGrid>
      {/* Checkout button */}
      <StyledCheckoutButton onClick={handleCheckout} variant="contained">
        Finish Purchase
      </StyledCheckoutButton>
    </StyledContainer>
  );
};

export default ProductList;
