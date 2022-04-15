import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, filterProducts } from '../../store/slices/productSlice'

import db from '../../db.json'

import styles from './delivery.module.css'
import {
  editDelivery,
  removeAllItems,
  setIsDelivery,
} from '../../store/slices/cartSlice'
import DeliveryInput from './DeliveryInput'

const Delivery = () => {
  const dispatch = useDispatch()

  const [filter, setFilter] = useState({
    filter: null,
    isFilter: false,
  })

  const [address, setAddress] = useState({ street: '', house: '' })

  const isSendToServer = useSelector((state) => state.cart.isSend)

  const handleClick = (e) => {
    e.target.value === filter.filter
      ? setFilter((prev) => ({
          ...prev,
          isFilter: !prev.isFilter,
        }))
      : setFilter((prev) => ({ ...prev, isFilter: true }))
    setFilter((prev) => ({ ...prev, filter: e.target.value }))

    if (e.target.value === 'delivery') {
      dispatch(filterProducts(db))
      dispatch(setIsDelivery(true))
    } else {
      dispatch(fetchProducts(db))
      dispatch(setIsDelivery(false))
    }
  }

  useEffect(() => {
    dispatch(editDelivery({ address }))
  }, [address])

  useEffect(() => {
    console.log(isSendToServer)
    if (isSendToServer) {
      setAddress({
        house: '',
        street: '',
      })
    }
  }, [isSendToServer])

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

      {filter.filter === 'delivery' && (
        <div className={styles.address__wrapper}>
          <DeliveryInput
            name={'Улица'}
            address={address.street}
            setAddress={setAddress}
            addressValue={'street'}
          />
          <DeliveryInput
            name={'Дом'}
            address={address.house}
            setAddress={setAddress}
            addressValue={'house'}
          />
        </div>
      )}
    </div>
  )
}

export default Delivery
