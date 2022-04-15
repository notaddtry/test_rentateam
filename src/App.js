import React from 'react'
import { Routes, Route } from 'react-router-dom'

import HomeLayout from './components/layout/HomeLayout'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomeLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
