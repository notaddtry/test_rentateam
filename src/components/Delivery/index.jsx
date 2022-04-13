import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterProducts } from '../../store/slices/productSlice'

import styles from './delivery.module.css'

const Delivery = () => {
  const dispatch = useDispatch()

  const [filter, setFilter] = useState({
    filter: undefined,
    isFilter: false,
    filterType: null,
  })

  const handleFilter = () => {}

  const handleClick = (e) => {
    e.target.value === filter.filter
      ? setFilter((prev) => ({
          ...prev,
          isFilter: !prev.isFilter,
          filterType: null,
        }))
      : setFilter((prev) => ({ ...prev, isFilter: true }))
    setFilter((prev) => ({ ...prev, filter: e.target.value }))
  }

  useEffect(() => {
    filter.filter === 'delivery'
      ? setFilter((prev) => ({ ...prev, filterType: true }))
      : setFilter((prev) => ({ ...prev, filterType: false }))
  }, [filter.filter])

  useEffect(() => {
    dispatch(filterProducts(filter))
  }, [filter.filterType, filter.isFilter])

  return (
    <div className={styles.delivery_wrapper}>
      <div className={styles.delivery__title_wrapper}>
        <h1 className={styles.delivery__title}>Доставка г. Москва</h1>
        <div className={styles.delivery__choose_type}>
          <button
            value={'delivery'}
            onClick={(e) => handleClick(e)}
            className={`${styles.delivery__choose__type_item} ${styles.delivery__choose__type_item_red}`}>
            Доставка
          </button>
          <button
            value={'pickup'}
            onClick={(e) => handleClick(e)}
            className={styles.delivery__choose__type_item}>
            Самомывоз
          </button>
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

export default Delivery
