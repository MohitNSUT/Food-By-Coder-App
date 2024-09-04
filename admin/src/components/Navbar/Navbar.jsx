import React, { useEffect } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {

  return (
    <div>
      <div className='navbar admin-nav'>
          <img className='logo' src={assets.logo} alt="" />
          <h3>Admin Panel</h3>
          <img className='profile' src={assets.profile_image} alt="" />
      </div>
    </div>
  )
}

export default Navbar
