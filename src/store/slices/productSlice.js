import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  loading: 'idle',
  error: null,
  products: [],
  category: '',
  filter: false,
}

export const fetchProducts = createAsyncThunk(
  'product/fetchByIdStatus',
  async (data) => {
    return data
  }
)
export const filterProducts = createAsyncThunk(
  'product/filterProduct',
  async (data) => {
    return data
  }
)

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.fulfilled]: (state, action) => {
      state.loading = 'success'
      state.products = action.payload.product
      state.category = action.payload.category
    },
    [fetchProducts.rejected]: (state, action) => {
      state.loading = 'reject'
    },
    [fetchProducts.pending]: (state) => {
      state.loading = 'pending'
      state.error = null
    },

    [filterProducts.fulfilled]: (state, action) => {
      state.loading = 'success'
      const filteredProducts = []
      action.payload.product.forEach((products) => {
        for (let key in products) {
          if (key !== 'productCategory') {
            const filteredObject = {
              [key]: products[key].filter(
                (product) => product.delivery === true
              ),
              productCategory: key,
            }
            filteredProducts.push(filteredObject)
          }
        }
      })
      state.products = filteredProducts
    },
    [filterProducts.rejected]: (state, action) => {
      state.loading = 'reject'
    },
    [filterProducts.pending]: (state) => {
      state.loading = 'pending'
      state.error = null
    },
  },
})

export default productSlice.reducer
