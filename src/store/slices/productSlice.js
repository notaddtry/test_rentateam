import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import db from '../../db.json'

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

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart(state, action) {},
    // fetchProducts(state, action) {
    //   state.products.push('1')
    //   state.products = action.payload.product
    //   state.category = action.payload.category

    //   // console.log(Object.keys(state.products).map((e) => state.products[e]))
    // },
    filterProducts(state, action) {
      state.filter = action.payload.isFilter
      if (state.filter) {
        const filteredProducts = []
        db.product.forEach((products) => {
          for (let key in products) {
            if (key !== 'productCategory') {
              // filteredProducts.productCategory = products.productCategory
              const filteredObject = {
                [key]: products[key].filter(
                  (product) => product.delivery === action.payload.filterType
                ),
                productCategory: key,
              }
              filteredProducts.push(filteredObject)
            }
          }
        })
        state.products = filteredProducts
      } else {
        state.products = db.product
      }

      // state.products = action.payload.product
      // let products = state.products
      // console.log(state.products)
      // for (let key in products) {
      //   console.log(products[key])
      // }

      // state.products = state.products.filter(
      //   (product) => product.delivery === action.payload
      // )
    },
  },
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
  },
})

export const { addToCart, filterProducts } = productSlice.actions

export default productSlice.reducer
