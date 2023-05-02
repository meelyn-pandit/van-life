import React, { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function VanDetail() {
  const params = useParams()
  console.log(params)

  useEffect(() => {
    // fetch data
    const van_id = fetch(`/api/vans/:${params.id}`)
    console.log('Van ID ', params.id)  
  }, [])
  return <h1>Van detail page goes here</h1>
}