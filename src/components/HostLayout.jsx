import React from 'react'
import {Outlet,NavLink} from 'react-router-dom'
const HostLayout = () => {
    const activeLink = {
        'fontWeight':'bold',
        'color':'red',
        'textDecoration' : 'underline'
    }
  return (
    <>
        <nav className='host-nav'>
        <NavLink  to='/host' end style={({isActive})=>isActive?activeLink:null}>Dashboard</NavLink>
        <NavLink to='/host/income'  style={({isActive})=>isActive?activeLink:null}>Income</NavLink>
        <NavLink to='/host/vans'  style={({isActive})=>isActive?activeLink:null}>Vans</NavLink>
        <NavLink to='/host/reviews'  style={({isActive})=>isActive?activeLink:null}>Reviews</NavLink>
        </nav>
      <Outlet/>
    </>
  )
}

export default HostLayout
