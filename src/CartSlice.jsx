import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // array of cart items
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload; 
      const existingItem = state.items.find(item => item.name === name);

      if (existingItem) {
        existingItem.quantity += 1; 
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      // payload will be product name
      state.items = state.items.filter(item => item.name !== action.payload);
    },

    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// Export actions
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
