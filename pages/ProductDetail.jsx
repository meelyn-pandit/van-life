import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function ProductDetail() {
  const params = useParams()
  const [detail, setDetail] = useState(null)
  console.log(params)

  useEffect(() => {
    const detail_id = fetch(`/api/vans/:${params.id}`)
    .then(res => res.json())
    .then(data => setData(data.details))
  }, [params.id])
  return <h1>Product detail goes here</h1>
}