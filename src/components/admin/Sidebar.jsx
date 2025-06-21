import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

function Sidebar() {
  return (
    <div>
      <NavLink end={true} to='/admin' className={({isActive})=>` `}>
        <img src={assets.home_icon} alt="" className='min-w-4 w-5'/>
        <p className='hidden md:inline-block'>Dashboard</p>
      </NavLink>
    </div>
  )
}

export default Sidebar
