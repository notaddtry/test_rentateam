import React, { useEffect } from 'react'
import Delivery from '../components/Delivery'
import Menu from '../components/Menu'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../store/slices/productSlice'
import { fetchData } from '../api/fetchData'

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
