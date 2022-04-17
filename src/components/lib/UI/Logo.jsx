import React from 'react'

const Logo = ({ width, height, top, left }) => {
  return (
    <div className='logo' style={{ top, left }}>
      <div className='logo-red' style={{ width, height }}></div>
      <div className='logo-white' style={{ width, height }}></div>
      <div className='logo-red' style={{ width, height }}></div>
      <div className='logo-white' style={{ width, height }}></div>
      <div className='logo-red' style={{ width, height }}></div>
    </div>
  )
}

export default Logo
