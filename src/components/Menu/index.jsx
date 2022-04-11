import React from 'react'
import Category from './Category'

import styles from './menu.module.css'
import MenuNav from './MenuNav'

const index = () => {
  return (
    <div className={styles.wrapper}>
      <MenuNav />
      <Category />
    </div>
  )
}

export default index
