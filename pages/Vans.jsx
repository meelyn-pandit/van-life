import React from "react"
import { useState, useEffect } from 'react-router-dom'

export default function Vans () {

  const[data, setData] = useState()

  useEffect(() => {
    // fetch data
    fetch('/api/vans')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

  
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

  return (
    <h1>Vans page goes here</h1>
    )
  }