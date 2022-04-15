import React from 'react'
import { useSelector } from 'react-redux'

import styles from './delivery.module.css'

const DeliveryInput = ({ name, address, setAddress, addressValue }) => {
  const isInvalidAddesss = useSelector((state) => state.cart.deliveryError)

  return (
    <div className={styles.address__item}>
      <span className={styles.address__span}>{name}</span>

      <input
        value={address}
        onChange={(e) =>
          setAddress((prev) => ({ ...prev, [addressValue]: e.target.value }))
        }
        type='text'
        className={styles.address__input}
        placeholder='Остоженка'
      />
      {isInvalidAddesss && !address && (
        <div className={styles.delivery__choose_error}>
          <span className={styles.delivery__choose_error_text}>
            Заполните для оформления доставки
          </span>
        </div>
      )}
    </div>
  )
}

export default DeliveryInput
