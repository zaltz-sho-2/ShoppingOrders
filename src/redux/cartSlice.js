import { createSlice } from '@reduxjs/toolkit';

// Initial state with an empty cart, total quantity, and total price
const initialState = {
  productsInCart: [],  
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',         
  initialState,         
  reducers: {
    // Add product to the cart
    addToCart: (state, action) => {
      const { productId, name, price } = action.payload;
      const existingProduct = state.productsInCart.find(
        (item) => item.productId === productId
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.productsInCart.push({ productId, name, price, quantity: 1 });
      }
      
      state.totalQuantity += 1;
      state.totalPrice += price;
    },

    // Remove product from the cart
    removeFromCart: (state, action) => {
      const { productId, price } = action.payload;
      const existingProduct = state.productsInCart.find(
        (item) => item.productId === productId
      );
    
      if (existingProduct) {
        existingProduct.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= price;

        if (existingProduct.quantity === 0) {
          state.productsInCart = state.productsInCart.filter(
            (item) => item.productId !== productId
          );
        }
      }
    },

    // Clear all products from the cart
    clearCart: (state) => {
      state.productsInCart = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    }
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
