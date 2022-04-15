import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
  isDelivery: false,
  deliveryAddress: {
    street: '',
    house: '',
  },
  deliveryError: false,
  isSend: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      if (!state.cart.find((item) => item.id === action.payload.id)) {
        state.cart.push(action.payload)
        state.isSend = false
      }
    },
    incrementCountProduct(state, action) {
      const product = state.cart.find((item) => item.id === action.payload)
      product.count++
      product.totalPrice = product.count * product.price
    },
    decrementCountProduct(state, action) {
      const product = state.cart.find((item) => item.id === action.payload)
      if (product.count > 1) {
        product.count--
        product.totalPrice = product.count * product.price
      } else {
        const index = state.cart.findIndex((item) => item.id === action.payload)
        state.cart.splice(index, 1)
      }
    },
    removeAllItems(state) {
      state.cart.length = 0
      state.isSend = true
    },
    editDelivery(state, action) {
      state.deliveryError = false
      state.deliveryAddress = action.payload.address
    },
    setErrorDelivery(state, action) {
      state.deliveryError = true
    },
    setIsDelivery(state, action) {
      state.isDelivery = action.payload
      state.isSend = false
    },
  },
})

export const {
  addToCart,
  incrementCountProduct,
  decrementCountProduct,
  removeAllItems,
  editDelivery,
  setErrorDelivery,
  setIsDelivery,
} = cartSlice.actions

export default cartSlice.reducer
