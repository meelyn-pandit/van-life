import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function ProductDetail() {
  const { productId } = useParams()

  return <h1>Product id is {productId}</h1>
}