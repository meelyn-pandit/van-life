import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function HostVanDetail() {
  const params = useParams()
  console.log('HostVanDetails params ', params)
  const [hostVan, setHostVan] = useState(null)
  console.log('Van ', hostVan)

  useEffect(() => {
    fetch(`/api/host/vans/${params.hostId}`)
      .then(res => res.json())
      .then(data => setVan(data.vans))
      console.log('Vans Res', params.hostId)
  }, [params.hostId])

  return (
    <div className="van-detail-container">
      {hostVan ? (
        <div className="van-detail">
          <img src={hostVan.imageUrl} />
          <i className={`van-type ${hostVan.type} selected`}>{hostVan.type}</i>
          <h2>{hostVan.name}</h2>
          <p className="van-price"><span>${hostVan.price}</span>/day</p>
          <p>{hostVan.description}</p>  
          <button className="link-button">Rent this van</button>
        </div>
      ) : <h2>Loading...</h2>}
    </div>
  ) 
}