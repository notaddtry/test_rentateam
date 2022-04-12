import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchData } from '../../api/fetchData'

const initialState = {
  products: [],
}

// export const fetchProducts = createAsyncThunk(
//   'product/fetchByIdStatus',
//   async () => {
//     const response = await fetchData('http://localhost:3000/product')
//     // const response = await fetch('http://localhost:3000/product')
//     // console.log(response.json())
//     const data = await response.json()
//     // console.log(response)
//     return data
//   }
// )

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart(state, action) {},
    fetchProducts(state, action) {
      state.products = action.payload
    },
  },
  // extraReducers: {
  //   [fetchProducts.fulfilled]: (state, action) => {
  //     state.loading = 'success'
  //     state.products = action.payload
  //   },
  //   [fetchProducts.rejected]: (state, action) => {
  //     state.loading = 'reject'
  //   },
  //   [fetchProducts.pending]: (state) => {
  //     state.loading = 'pending'
  //     state.error = null
  //   },
  // },
})

export const { addToCart, fetchProducts } = productSlice.actions

export default productSlice.reducer
