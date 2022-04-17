import React, { useLayoutEffect } from 'react'

import ProductList from '../Product/ProductList'
import { observerSection } from '../lib/helpers/observerSection'

import styles from './menu.module.css'

let nameUI = ''

const Category = ({ category, name }) => {
  switch (name) {
    case 'burgers':
      nameUI = 'Бургеры'
      break
    case 'twisters':
      nameUI = 'Твистеры'
      break
    case 'strips':
      nameUI = 'Стрипсы'
      break
    case 'chicken':
      nameUI = 'Курица'
      break
    default:
      nameUI = 'Категория'
      break
  }

  useLayoutEffect(() => {
    observerSection()
  }, [])

  return (
    <section className={styles.menu__category_wrapper} id={name}>
      <h2 className={styles.category_title}>{nameUI}</h2>
      <ProductList category={category[name]} />
    </section>
  )
}

export default Category
