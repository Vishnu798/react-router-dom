import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanPrice = () => {
    const currentVan = useOutletContext();
    console.log("host van details are :",currentVan)
  return (
    <>
       <h3 className="host-van-price">${currentVan.price}<span>/day</span></h3>
    </>
  )
}

export default HostVanPrice
