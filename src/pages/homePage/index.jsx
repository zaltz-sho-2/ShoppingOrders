import React from "react";
import CategoryTabs from '../../components/categoryTabs'; // Update the path if needed
import OrdersByEmail from "../../components/ordersByEmail"; // Update the path if needed
import { StyledHomePageContainer, StyledSection } from "./style"; // Importing styled components

const HomePage = () => {
  return (
    <StyledHomePageContainer>
      {/* Category Tabs Section */}
      <StyledSection>
        <CategoryTabs />
      </StyledSection>

      {/* Orders by Email Section */}
      <StyledSection maxWidth="400px">
        <OrdersByEmail />
      </StyledSection>
    </StyledHomePageContainer>
  );
};

export default HomePage;
