import React from 'react';
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { StyledAppBar, StyledToolbar, StyledTitle, StyledCartInfo } from './style';

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        {/* Title aligned with cart info */}
        <StyledTitle variant="h6">Shopping Orders</StyledTitle>

        {/* Cart info with badge */}
        <StyledCartInfo>
          <Badge
            badgeContent={totalQuantity}
            color="error"
            aria-label="Shopping cart items count"
          >
            <ShoppingCartIcon />
          </Badge>
        </StyledCartInfo>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;
