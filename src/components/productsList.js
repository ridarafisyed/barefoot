import React, { useState, useContext } from "react"
import { Link } from "gatsby"
import Grid from "@material-ui/core/Grid"
import CartContext from "../hooks/CartContext"
import products from "../data/shoes_data2.json"

import styled from "../styling/main.module.css"

export default function products() {
  const [itemNumber, setItemNumber] = useState(0)

  const addToCart = () => {
    console.log("added item into the cart")
  }
  return (
    
  )
}
