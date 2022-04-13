import React from 'react'
import Category from './Category'

import styles from './menu.module.css'
import MenuNav from './MenuNav'
import { useSelector } from 'react-redux'

const Menu = () => {
  const categories = useSelector((state) => state.product.products)
  console.log(categories)

  return (
    <div className={styles.wrapper}>
      <MenuNav />
      {categories.map((category) => (
        <Category
          key={category.productCategory}
          category={category}
          name={category.productCategory}
        />
      ))}
    </div>
  )
}

export default Menu
