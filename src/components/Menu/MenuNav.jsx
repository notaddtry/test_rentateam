import React from 'react'
import { useSelector } from 'react-redux'

import styles from './menu.module.css'

const MenuNav = () => {
  const links = useSelector((state) => state.product.category)

  return links ? (
    <div className={styles.menu__nav_wrapper}>
      <ul className={styles.menu__nav_list}>
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={styles.menu__nav_item}>
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
