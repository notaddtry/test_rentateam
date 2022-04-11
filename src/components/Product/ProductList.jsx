import React from 'react'
import ProductItem from './ProductItem.jsx'

import styles from './product.module.css'

const ProductList = () => {
  return (
    <div className={styles.product_list__wrapper}>
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  )
}

export default ProductList
