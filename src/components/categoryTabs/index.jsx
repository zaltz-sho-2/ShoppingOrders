import React, { useState } from "react";
import { Tabs, Tab, CircularProgress } from "@mui/material";
import useProductByCategories from "../../hooks/useProductByCategorie";
import ProductList from "../productList";
import { StyledBox } from "./style"; // Importing the styled component

const CategoryTabs = () => {
  // Custom hook to fetch categories
  const { productsByCategories, loading, error } = useProductByCategories();

  // State to keep track of the selected tab
  const [selectedTab, setSelectedTab] = useState(0);

  // Handle tab change when a user clicks on a different tab
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  // Display loading spinner while data is being fetched
  if (loading) return <CircularProgress />;

  // Show error message if there is an issue loading the categories
  if (error) return <p>Error loading categories: {error}</p>;

  return (
    <StyledBox>
      <Tabs value={selectedTab} onChange={handleTabChange} centered>
        {productsByCategories?.map((category) => (
          // Create a Tab for each category
          <Tab key={category.CategoryId} label={category.CategoryName} />
        ))}
      </Tabs>

      {/* Show products of the selected category */}
      {(productsByCategories && productsByCategories[selectedTab]) && (
        <ProductList products={productsByCategories[selectedTab].Products} />
      )}
    </StyledBox>
  );
};

export default CategoryTabs;


