import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        items: [],
        quantity: 0,
        total: 0,
};

const cartSlice = createSlice({
        name: "cart",
        initialState,
        reducers: {
                addToCart: (state, action) => {
                        state.quantity += 1;
                        state.total += action.payload.price;
                        state.items.push(action.payload);
                },
        },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;