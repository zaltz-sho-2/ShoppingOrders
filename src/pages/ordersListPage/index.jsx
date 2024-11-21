import React from "react";
import { Typography, CircularProgress } from "@mui/material";
import { useOrders } from "../../hooks/useOrderHooks"; // Custom hook to fetch orders
import BackHomeButton from "../../components/backHomeButton"; // Button to navigate back home
import {
  StyledContainer,
  StyledLoadingContainer,
  StyledOrderCard,
  StyledErrorMessage,
  StyledNoOrdersMessage,
  StyledButton,
} from "./style"; // Importing styled components

const OrdersListPage = ({ customerEmail }) => {
  const { orders, isLoading, error } = useOrders(customerEmail);

  // If no email is provided
  if (!customerEmail) {
    return <Typography variant="h6">No customer email provided</Typography>;
  }

  // While loading orders
  if (isLoading) {
    return (
      <StyledLoadingContainer>
        <CircularProgress />
        <Typography variant="body1" style={{ marginTop: "10px" }}>
          Loading orders...
        </Typography>
      </StyledLoadingContainer>
    );
  }

  // If an error occurred
  if (error) {
    return <StyledErrorMessage>{error}</StyledErrorMessage>;
  }

  return (
    <>
      <StyledButton>
        <BackHomeButton />
      </StyledButton>
      <StyledContainer>
        <Typography variant="h4" align="center" gutterBottom>
          Orders for {customerEmail}
        </Typography>
        {orders.length === 0 ? (
          <StyledNoOrdersMessage>No orders found.</StyledNoOrdersMessage>
        ) : (
          <>
            {orders.map((order) => (
              <StyledOrderCard key={order.Id}>
                <Typography variant="h6">Order #{order.Id}</Typography>
                <Typography variant="body1">
                  Date: {new Date(order.OrderDate).toLocaleString()}
                </Typography>
                <Typography variant="body1">
                  Total Price: ₪{order.TotalPrice.toFixed(2)}
                </Typography>

                <Typography variant="h6" style={{ marginTop: "10px" }}>
                  Products:
                </Typography>
                {order.Products?.map((product) => (
                  <Typography key={product.ProductId} variant="body1">
                    {product.ProductName} - Quantity: {product.Quantity} - Price: ₪
                    {product.Price.toFixed(2)}
                  </Typography>
                ))}
              </StyledOrderCard>
            ))}
          </>
        )}
      </StyledContainer>
    </>
  );
};

export default OrdersListPage;
