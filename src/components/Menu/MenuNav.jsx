import React from 'react'

import styles from './menu.module.css'
import { useSelector } from 'react-redux'

const MenuNav = () => {
  const links = useSelector((state) => state.product.category)

  return links ? (
    <div className={styles.menu__nav_wrapper}>
      <ul className={styles.menu__nav_list}>
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`${styles.menu__nav_item} ${styles.menu__nav_item_active}`}>
            {link.name}
          </a>
        ))}
      </ul>
    </div>
  ) : (
    <></>
  )
}

export default MenuNav
