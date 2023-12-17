import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import StatusCode from '../utils/StatusCode';

const initialState = {
    data:[],
    status: 'idle'
}
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
        // fetchProducts(state, action){
        //     state.data = action.payload
        // }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getProducts.pending, (state, action)=>{
            state.status = StatusCode.LOADING;
        })
        .addCase(getProducts.fulfilled, (state, action)=>{
            state.data = action.payload;
            state.status = StatusCode.IDLE;
        })
        .addCase(getProducts.rejected, (state, action)=>{
            state.status = StatusCode.ERROR;
        })
    }
});

export const {fetchProducts} = productSlice.actions
export default productSlice.reducer;
export const getProducts= createAsyncThunk('products/get', async()=>{
    const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
})

// export function getProducts(){
//     return async function getProductsThunk(dispatch, getState){
//         const {data} = await axios.get("https://fakestoreapi.com/products")
//         dispatch(fetchProducts(data))
//     }
// }