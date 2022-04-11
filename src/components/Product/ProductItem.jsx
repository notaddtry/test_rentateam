import React from 'react'

import styles from './product.module.css'

const ProductItem = () => {
  return (
    <div className={styles.product_item__wrapper}>
      <div className={styles.product_item__img}>
        <div className={`${styles.product_item__label} ${styles.hide}`}>
          <span className={styles.product_item__label_new}>Новое</span>
          <span className={styles.product_item__label_hit}>Хит</span>
        </div>
        <img src='' alt='' />
        <div className={styles.product_item__buy}>+</div>
        <div className={`${styles.product_item__count_wrapper} ${styles.hide}`}>
          <span className={styles.product_item__dec}>-</span>
          <span className={styles.product_item__count}>1</span>
          <span className={styles.product_item__inc}>+</span>
        </div>
      </div>
      <div className={styles.product_item__content}>
        <span className={styles.product_item__title}>Бургер</span>
        <span className={styles.product_item__price}>144 P</span>
      </div>
    </div>
  )
}

export default ProductItem
