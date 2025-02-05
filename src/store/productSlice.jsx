import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name : "product",
    initialState: {
                    data:[], status: "Idle"
                  },
    //while dealing with redux thunk, we have to maintain extra reducers with builder and cases: pending, fulfilled, rejected
    extraReducers: (builder)=>{
                builder.addCase(fetchProducts.pending, (state,action) => {state.status = "Loading"} )
                builder.addCase(fetchProducts.fulfilled, (state,action)=>{state.data=action.payload,state.status = "Idle"})
                builder.addCase(fetchProducts.rejected,(state,action)=>{state.status="Error"})

    }
})


export const fetchProducts= createAsyncThunk('products/fetch', async()=>{
    const res = await fetch('https://fakestoreapi.com/products');
    const data=await res.json()
    return data
})


export default productSlice.reducer