import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function VanDetail() {
  const params = useParams()
  const [van, setVan] = useState(null)
  console.log(params)

  useEffect(() => {
    // fetch data
    const van_id = fetch(`/api/vans/:${params.id}`)
    .then(res => res.json())
    .then(data => setData(data.vans))
  }, [params.id])
  return <h1>Van detail page goes here</h1>
}