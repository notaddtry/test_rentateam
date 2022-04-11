import React from 'react'

import styles from './menu.module.css'

const MenuNav = () => {
  return (
    <div className={styles.menu__nav_wrapper}>
      <ul className={styles.menu__nav_list}>
        <li
          className={`${styles.menu__nav_item} ${styles.menu__nav_item_active}`}>
          Бургеры
        </li>
        <li className={styles.menu__nav_item}>Бургеры</li>
        <li className={styles.menu__nav_item}>Бургеры</li>
        <li className={styles.menu__nav_item}>Бургеры</li>
        <li className={styles.menu__nav_item}>Бургеры</li>
        <li className={styles.menu__nav_item}>Бургеры</li>
        <li className={styles.menu__nav_item}>Бургеры</li>
      </ul>
    </div>
  )
}

export default MenuNav
