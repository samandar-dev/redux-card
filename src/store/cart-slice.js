import { createSlice } from "@reduxjs/toolkit";
const items = []

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: items,
    totalQuantity: 0
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItems = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItems) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price
        });
      } else {
        existingItems.quantity++;
        existingItems.totalPrice = existingItems.totalPrice + newItem.price;
      }
    },
    removItemToCart(state, action) {
      const obj = action.payload
      const cartt = state.items.find((item) => item.id === obj.id);
      state.totalQuantity--;
      if (cartt.quantity > 1) {
        cartt.quantity--
        cartt.totalPrice = cartt.totalPrice - obj.price;
      } else {
        state.items = state.items.filter(itm => itm.id !== cartt.id)
      }
    }
  }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;