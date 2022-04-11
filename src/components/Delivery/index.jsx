import React from 'react'

import styles from './delivery.module.css'

const index = () => {
  return (
    <div className={styles.delivery_wrapper}>
      <div className={styles.delivery__title_wrapper}>
        <h1 className={styles.delivery__title}>Доставка г. Москва</h1>
        <div className={styles.delivery__choose_type}>
          <div
            className={`${styles.delivery__choose__type_item} ${styles.delivery__choose__type_item_red}`}>
            Доставка
          </div>
          <div className={styles.delivery__choose__type_item}>Самомывоз</div>
        </div>
      </div>
      <div className={styles.address__wrapper}>
        <div className={styles.address__item}>
          <span className={styles.address__span}>Улица</span>
          <input
            type='text'
            className={styles.address__input}
            placeholder='Остоженка'
          />
        </div>
        <div className={styles.address__item}>
          <span className={styles.address__span}>Дом</span>
          <input
            type='text'
            className={styles.address__input}
            placeholder='Остоженка'
          />
        </div>
      </div>
    </div>
  )
}

export default index
