import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanPhoto = () => {
    const currentVan = useOutletContext();
    console.log("host van details are :",currentVan)
  return (
    <>
     <img src={currentVan.imageUrl} className="host-van-detail-image" alt='van' /> 
    </>
  )
}

export default HostVanPhoto
