import React from 'react'

import ProductList from '../Product/ProductList'

import styles from './menu.module.css'

const Category = ({ category, name }) => {
  return (
    <div className={styles.menu__category_wrapper}>
      <h2 className={styles.category_title}>{name}</h2>
      <ProductList category={category} />
    </div>
  )
}

export default Category
