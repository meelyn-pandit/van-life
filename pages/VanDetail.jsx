import React, { useState, useEffect } from "react"
import { useParams, useLocation, Link } from "react-router-dom"

export default function VanDetail() {

  const params = useParams()
  const location = useLocation()
  console.log('location', location)


  const [van, setVan] = useState(null)
  console.log('Van ', van)

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then(res => res.json())
      .then(data => setVan(data.vans))
      console.log('Vans Res', params.id)
  }, [params.id])

  const search = location.state?.search || ''
  console.log('van detail search', search)

  const type = location.state?.type || 'all'

  return (
    <div className="van-detail-container">

      <Link
        to={`..${search}`}
        relative="path"
        className="back-button"
        >Go Back to {type} Vans </Link>

      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price"><span>${van.price}</span>/day</p>
          <p>{van.description}</p>  
          <button className="link-button">Rent this van</button>
        </div>
      ) : <h2>Loading...</h2>}
    </div>
  ) 
}