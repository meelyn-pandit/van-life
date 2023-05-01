import React, {useState, useEffect } from "react"
// import { useState, useEffect } from 'react-router-dom'

export default function Vans () {

  const[vans, setVans] = useState([])

  useEffect(() => {
    // fetch data
    fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
    }, [])

    const vanElements = vans.map(van => (
      <div key={van.id} className="van-tile">
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>${van.price}<span>/day</span></p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </div> 
    ))

    return (
      <h1>Vans page goes here</h1>
      )
    }
  // useEffect(() => {
  //   getData()
  // }, [])

  // async function getData() {
  //   await fetch(/api/vans)
  //      .then(response => {
  //     if(response.ok) {
  //       console.log('Response JSON ', response.json)
  //       return JSON.parse(response.json())
  //     }
  //     throw response
  //   })
  //   .then (data => {
  //     setData(data)
  //     console.log('Data ', data)
  //   })
  //   .catch(error => {
  //     console.error("Error fetching data: ", error)
  //     setError(error)
  //   })
  //   .finally(()=> setLoading(false))
  // }

  // const [data, setData] = useState('null')
  // useEffect(() => {
  //   fetch(/api/vans)
  //   .then(response => {
  //     if(response.ok) {
  //       console.log('Response JSON ', response.json)
  //       return JSON.parse(response.json())
  //     }
  //     throw response
  //   })
  //   .then (data => {
  //     setData(data)
  //     console.log('Data ', data)
  //   })
  //   .catch(error => {
  //     console.error("Error fetching data: ", error)
  //     setError(error)
  //   })
  //   .finally(()=> setLoading(false))
  // }, [])

