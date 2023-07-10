import React, { useState, useEffect } from 'react'
import { Link, useParams, Outlet, NavLink, useLoaderData } from 'react-router-dom'
import '../../api'
import { getHostVans } from '../../api'
import { requireAuth } from "../../utils"


export async function loader({ params }) {
  await requireAuth()
  return getHostVans(params.id)
}

export default function HostVanDetail() {

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
}

  const currentVan = useLoaderData()
  // const [currentVan, setCurrentVan] = useState(null)
  const { id } = useParams()

  // useEffect(() => {
  //   fetch(`/api/host/vans/${id}`)
  //     .then(res => res.json())
  //     .then(data => setCurrentVan(data.vans))
  //     // console.log('Vans Res', params.hostId)
  // }, [id])

  return (
    <div className="van-detail-container">
    <section>
      <Link
        to=".."
        relative="path"
        classname="back-button">Go Back to all Vans </Link>
        
      {currentVan ? (
        <div className="host-van-detail-layout-container">
            <div className="host-van-detail">
              <img src={currentVan.imageUrl} />
              <i className={`van-type ${currentVan.type} selected`}>{currentVan.type}</i>
              <h2>{currentVan.name}</h2>
              {/* <p className="van-price"><span>${currentVan.price}</span>/day</p> */}
              <p>{currentVan.description}</p>  
              <button className="link-button">Rent this van</button>
            </div>
            <nav className="host-van-detail-nav">
              <NavLink
                to="."
                end
                style={({isActive}) => isActive ? activeStyles : null}>
                  Details</NavLink>
              <NavLink
                to="photos"
                style={({isActive}) => isActive ? activeStyles : null}>
                  Photos</NavLink>
              <NavLink
                to="pricing"
                style={({isActive}) => isActive ? activeStyles : null}>Pricing</NavLink>
            </nav>
            <Outlet context={{ currentVan }}/>
          </div>
      ) : <h2>Loading...</h2>}
       </section>
    </div>
  ) 
}