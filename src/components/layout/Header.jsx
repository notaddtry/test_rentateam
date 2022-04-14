import React from 'react'
import Logo from '../UI/Logo'
import { useDispatch, useSelector } from 'react-redux'

import styles from './layout.module.css'
import { removeAllItems } from '../../store/slices/cartSlice'

const Header = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.cart)
  const totalFromStore = useSelector((state) => state.cart.cart)
  const totalCount = totalFromStore.reduce(
    (acc, item) => acc + +item.totalPrice,
    0
  )

  const printToConsole = () => {
    console.log(cart)
    dispatch(removeAllItems())
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
            <a className={styles.menu__item} href='#'>
              Home
            </a>
          </li>
          <li>
            <a className={styles.menu__item} href='#'>
              About
            </a>
          </li>
          <li>
            <a className={styles.menu__item} href='#'>
              Team
            </a>
          </li>
          <li>
            <a className={styles.menu__item} href='#'>
              Contact
            </a>
          </li>
          <li>
            <a className={styles.menu__item} href='#'>
              Twitter
            </a>
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
          <span className={styles.cart__sum}>{totalCount} Р</span>
          <div className={styles.cart__icon} />
        </div>
      </div>
    </header>
  )
}

export default Header
