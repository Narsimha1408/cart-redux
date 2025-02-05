import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart(state, action){
            state.push(action.payload)
        },
        removeFromCart(state, action){
            return state.filter((state_item)=> state_item.id !== action.payload.id)
        }
    }

})

export const {addToCart, removeFromCart} = cartSlice.actions

export default cartSlice.reducer