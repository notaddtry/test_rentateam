import React from 'react'

import styles from './product.module.css'

const ProductItem = ({ productName, price, image, count }) => {
  return (
    <div className={styles.product_item__wrapper}>
      <div className={styles.product_item__img}>
        <div className={`${styles.product_item__label} ${styles.hide}`}>
          <span className={styles.product_item__label_new}>Новое</span>
          <span className={styles.product_item__label_hit}>Хит</span>
        </div>
        <img src={`${process.env.PUBLIC_URL}${image}`} alt='fastfood' />
        <div className={styles.product_item__buy}>+</div>
        <div className={`${styles.product_item__count_wrapper} ${styles.hide}`}>
          <span className={styles.product_item__dec}>-</span>
          <span className={styles.product_item__count}>1</span>
          <span className={styles.product_item__inc}>+</span>
        </div>
      </div>
      <div className={styles.product_item__content}>
        <span className={styles.product_item__title}>{productName}</span>
        <span className={styles.product_item__price}>{price} P</span>
      </div>
    </div>
  )
}

export default ProductItem
