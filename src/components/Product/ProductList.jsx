import React from 'react'
import ProductItem from './ProductItem.jsx'

import styles from './product.module.css'

const ProductList = ({ category }) => {
  return (
    <div className={styles.product_list__wrapper}>
      {category.map((item) => (
        <ProductItem key={item.productId} {...item} />
      ))}
    </div>
  )
}

export default ProductList
