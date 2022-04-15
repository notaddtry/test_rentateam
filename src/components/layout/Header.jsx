import React from 'react'
import Logo from '../UI/Logo'
import { useDispatch, useSelector } from 'react-redux'

import styles from './layout.module.css'
import { setErrorDelivery, removeAllItems } from '../../store/slices/cartSlice'

const Header = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.cart)
  const deliveryAddress = useSelector((state) => state.cart.deliveryAddress)
  const isDelivery = useSelector((state) => state.cart.isDelivery)

  const totalCount = cart.reduce((acc, item) => acc + +item.totalPrice, 0)

  const printToConsole = () => {
    if (isDelivery) {
      if (deliveryAddress.street && deliveryAddress.house) {
        console.log(cart)
        dispatch(removeAllItems())
      } else {
        dispatch(setErrorDelivery(deliveryAddress))
      }
    } else {
      console.log(cart)
      dispatch(removeAllItems())
    }
  }

  return (
    <header>
      <div className={styles.burger_menu}>
        <input id={styles.menu__toggle} type='checkbox' />
        <label className={styles.menu__btn} htmlFor={styles.menu__toggle}>
          <span></span>
        </label>

        <ul className={styles.menu__box}>
          <li>
            <span className={styles.menu__item}>Home</span>
          </li>
          <li>
            <span className={styles.menu__item}>About</span>
          </li>
          <li>
            <span className={styles.menu__item}>Team</span>
          </li>
          <li>
            <span className={styles.menu__item}>Contact</span>
          </li>
          <li>
            <span className={styles.menu__item}>Twitter</span>
          </li>
        </ul>
      </div>
      <Logo
        width={'14px'}
        height={'17px'}
        top={'0'}
        left={'calc(50% - 35px)'}
      />
      <div className={styles.cart}>
        <div className={styles.cart__wrapper} onClick={printToConsole}>
          {totalCount > 0 ? (
            <span className={styles.cart__sum}>{totalCount} Р</span>
          ) : (
            <></>
          )}

          <div className={styles.cart__icon} />
        </div>
      </div>
    </header>
  )
}

export default Header
