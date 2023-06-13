import React from 'react'
import { Link, useOutletContext } from 'react-router-dom'

export default function HostVanInfo() {

  const { currentVan } = useOutletContext();

  return (
    <h3 className="host-van-price">${currentVan.price}<span>/day</span>
    </h3>
  )
}