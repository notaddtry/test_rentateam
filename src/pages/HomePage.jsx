import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../store/slices/productSlice'
import { fetchData } from '../api/fetchData'

import Delivery from '../components/Delivery'
import Menu from '../components/Menu'

const HomePage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const data = fetchData()
    dispatch(fetchProducts(data))
  }, [dispatch])

  return (
    <>
      <Delivery />
      <Menu />
    </>
  )
}

export default HomePage
