
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  items: [],
  delivery: 0,
  discount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
      state.delivery = 0;
      state.discount = 0;
    },
    setDelivery: (state, action) => {
      state.delivery = action.payload;
    },
    applyDiscount: (state, action) => {
      state.discount = action.payload;
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  setDelivery,
  applyDiscount,
} = cartSlice.actions;

export default cartSlice.reducer;
