import React from 'react'
import Category from './Category'

import styles from './menu.module.css'
import MenuNav from './MenuNav'
import { useSelector } from 'react-redux'

const Menu = () => {
  const categories = useSelector((state) => state.product.products.product)

  return categories !== undefined ? (
    <div className={styles.wrapper}>
      <MenuNav />
      <Category category={categories.burgers} name={'Бургер'} />
      <Category category={categories.twisters} name={'Твистер'} />
      <Category category={categories.chicken} name={'Курица'} />
      <Category category={categories.strips} name={'Стрипс'} />
    </div>
  ) : (
    <></>
  )
}

export default Menu
