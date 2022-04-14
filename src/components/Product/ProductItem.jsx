import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import {
  addToCart,
  incrementCountProduct,
  decrementCountProduct,
} from '../../store/slices/cartSlice'

import styles from './product.module.css'

// const productsSelector = createSelector(
//   (state) => state.cart,
//   (cart) => cart.cart
// )

const ProductItem = ({ productName, productId, price, image }) => {
  const dispatch = useDispatch()

  const productsAtCart = useSelector((state) => state.cart.cart)

  // console.log(productsAtCart)

  const handleAddProduct = (id, productName, price) => {
    const product = {
      id,
      productName,
      count: 1,
      price,
      totalPrice: price,
    }

    dispatch(addToCart(product))
  }

  const handleIncrement = (id) => {
    dispatch(incrementCountProduct(id))
  }

  const handleDecrement = (id) => {
    dispatch(decrementCountProduct(id))
  }

  return (
    <div className={styles.product_item__wrapper}>
      <div className={styles.product_item__img}>
        <div className={`${styles.product_item__label} ${styles.hide}`}>
          <span className={styles.product_item__label_new}>Новое</span>
          <span className={styles.product_item__label_hit}>Хит</span>
        </div>
        <img src={`${process.env.PUBLIC_URL}${image}`} alt='fastfood' />
        <button
          className={styles.product_item__buy}
          onClick={() => handleAddProduct(productId, productName, price)}>
          +
        </button>
        {productsAtCart.find((product) => product.id === productId) && (
          <div className={`${styles.product_item__count_wrapper}`}>
            <span
              className={styles.product_item__dec}
              onClick={() => handleDecrement(productId)}>
              -
            </span>
            <span className={styles.product_item__count}>
              {productsAtCart.find((product) => product.id === productId).count}
            </span>
            <span
              className={styles.product_item__inc}
              onClick={() => handleIncrement(productId)}>
              +
            </span>
          </div>
        )}
      </div>
      <div className={styles.product_item__content}>
        <span className={styles.product_item__title}>{productName}</span>
        <span className={styles.product_item__price}>{price} P</span>
      </div>
    </div>
  )
}

export default ProductItem
