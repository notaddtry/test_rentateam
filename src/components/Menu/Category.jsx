import React, { useLayoutEffect } from 'react'

import ProductList from '../Product/ProductList'

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
    const sections = document.querySelectorAll('section[id]')
    const menuSections = Array.from(document.querySelectorAll('a[href]'))

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) {
            menuSections.forEach((menuSection) => {
              menuSection.classList.remove('menu__nav_item_active')
              let menuSectionId = menuSection.getAttribute('href')
              menuSectionId = menuSectionId.slice(1, menuSectionId.length)

              if (menuSectionId === entry.target.id) {
                menuSection.classList.add('menu__nav_item_active')
              }
            })
          }
      },
      {
        rootMargin: '-50% 0px',
      }
    )
    for (let i = 0; i < sections.length; i++) observer.observe(sections[i])
  }, [])

  return (
    <section className={styles.menu__category_wrapper} id={name}>
      <h2 className={styles.category_title}>{nameUI}</h2>
      <ProductList category={category[name]} />
    </section>
  )
}

export default Category
