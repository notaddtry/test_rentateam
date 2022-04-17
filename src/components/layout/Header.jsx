import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setErrorDelivery, removeAllItems } from '../../store/slices/cartSlice'

import Logo from '../lib/UI/Logo'

import styles from './layout.module.css'

const Header = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.cart)
  const deliveryAddress = useSelector((state) => state.cart.deliveryAddress)
  const isDelivery = useSelector((state) => state.cart.isDelivery)
  const links = useSelector((state) => state.product.category)

  const [checked, setChecked] = useState(false)

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

  const handleBurger = () => {
    setChecked((prev) => !prev)
  }

  const handleScroll = () => {
    setChecked(false)
  }

  useEffect(() => {
    const body = document.querySelector('body')``
    if (checked) body.classList.add('hidden')
    else body.classList.remove('hidden')
  }, [checked])

  return (
    <header>
      <div className={styles.burger_menu}>
        <input
          id={styles.menu__toggle}
          type='checkbox'
          checked={checked}
          onChange={handleBurger}
        />
        <label className={styles.menu__btn} htmlFor={styles.menu__toggle}>
          <span></span>
        </label>

        {links ? (
          <ul className={styles.menu__box}>
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={styles.menu__item}
                onClick={handleScroll}>
                {link.name}
              </a>
            ))}
          </ul>
        ) : (
          <></>
        )}
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
