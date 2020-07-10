import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Products from "../components/products"

export default function Home() {
  return (
    <Layout>
      <Header />
      <Products />
    </Layout>
  )
}