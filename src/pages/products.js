import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Grid from "@material-ui/core/Grid"
import ProductsList from "../components/productsList"

import styled from "../styling/main.module.css"

const products = () => {
  return (
    <Layout>
      <div className={styled.container}>
        <div>
          <h1 className="text-center">Hello form Products Page </h1>
        </div>
        <ProductsList />
      </div>
    </Layout>
  )
}

export default products
