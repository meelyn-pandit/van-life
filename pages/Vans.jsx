import React, {useState, useEffect } from "react"
import { Link, useSearchParams } from 'react-router-dom'
import { getVans } from '../api'

export default function Vans () {
  const[vans, setVans] = useState([])
  const[searchParams, setSearchParams] = useSearchParams()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  console.log('van search params', searchParams.toString())

  const typeFilter = searchParams.get("type")
  console.log('Vans typefilter', typeFilter)

  useEffect(() => {
    // fetch data
    async function loadVans() {
        setLoading(true)
        try {

          const data = await getVans()
          setVans(data)
        } catch(err) {
          setError(err)
        } finally {
        setLoading(false)
      }
    }
    loadVans()
  }, [])

    const displayedVans = typeFilter ? vans.filter(van => van.type.toLowerCase() === typeFilter) : vans

    const vanElements = displayedVans.map(van => (
        <div key={van.id} className="van-tile">
        <Link to={van.id} 
              state={{ search: `?${searchParams.toString()}`,
                       type: typeFilter, }}>
          <img src={van.imageUrl} />
          <div className="van-info">
            <h3>{van.name}</h3>
            <p>${van.price}<span>/day</span></p>
          </div>
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </Link>
      </div> 
    ))

    function handleFilterChange(key, value) {
      setSearchParams(prevParams => {
        if(value === null) {
          prevParams.delete(key)
        } else {
          prevParams.set(key,value)
        }
        return prevParams
      })
    }

    if (loading) {
      return<h1>Loading...</h1>
    }

    if (error) {
      return<h1>There was an error: {error}</h1>
    }

    return (
      <div className="van-list-container">
        <h1>Explore our van options</h1>
        <div className="van-list-filter-buttons">
          <button className={`van-type simple ${typeFilter === 'simple' ? 'selected' : ''}`}
            onClick={() => handleFilterChange('type', 'simple')}>Simple</button>
          <button className={`van-type rugged ${typeFilter === 'rugged' ? 'selected' : ''}`}
            onClick={() => handleFilterChange('type', 'rugged')}>Rugged</button>
          <button className={`van-type luxury ${typeFilter === 'luxury' ? 'selected' : ''}`}
            onClick={() => handleFilterChange('type', 'luxury')}>Luxury</button>
          {typeFilter ? (
            <button
              onClick={() => handleFilterChange('type', null)}>Clear</button>) : null
              }
          {/* <Link className="van-type simple" to="?type=simple">Simple</Link>
          <Link className="van-type rugged" to="?type=rugged">Rugged</Link>
          <Link className="van-type luxury" to="?type=luxury">Luxury</Link>
          <Link to=''>Clear</Link> */}
        </div>
        <div className="van-list">
          {vanElements}
        </div>
      </div>
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

