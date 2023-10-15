import React from 'react'
import {NavLink,Outlet} from 'react-router-dom'
const HostDetailsLayout = ({HostVanDetails}) => {
    const activeLink = {
        'fontWeight':'bold',
        'color':'red',
        'textDecoration' : 'underline'
    }
  return (
    <>
       <nav className='host-nav'>
     
        <NavLink to='.' end style={({isActive})=>isActive?activeLink:null}>Details</NavLink>
        <NavLink to='price'  style={({isActive})=>isActive?activeLink:null}>Price</NavLink>
        <NavLink to='photo'  style={({isActive})=>isActive?activeLink:null}>Photos</NavLink>
        </nav>
      <Outlet context={HostVanDetails}/>
    </>
  )
}

export default HostDetailsLayout
