import React from 'react'
import ProductList from '../Product/ProductList'

import styles from './menu.module.css'

const Category = () => {
  return (
    <div className={styles.menu__category_wrapper}>
      <h2 className={styles.category_title}>Бургеры</h2>
      <ProductList />
    </div>
  )
}

export default Category
