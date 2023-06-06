import React, {useState, useEffect } from "react"
import { Link } from 'react-router-dom'

export default function HostVans () {
  const[hostVans, setHostVans] = useState([])
  useEffect(() => {
    // fetch data
    fetch("/api/host/vans")
        .then(res => res.json())
        .then(data => setHostVans(data.vans))
    }, [])

    const hostVansEls = hostVans.map(van => (
        <div key={van.id} className="van-tile">
        <Link to={`/host/vans/${van.id}`} >
          <img src={van.imageUrl} />
          <div className="van-info">
            <h3>{van.name}</h3>
            <p>${van.price}<span>/day</span></p>
          </div>
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </Link>
      </div> 
    ))

    return (
      <section>
        <h1 className="host-vans-title">Your listed vans</h1>
        <div className="host-vans-list">
          {
          hostVans.length > 0 ? (
            <section>
              {hostVansEls}
            </section>
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
      </section>
      )
    }