//
import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import New_Arrival from "../components/new_arrival"

import { ProductProvider } from "../hooks/ProductContext"

export default function Home() {
  return (
    <ProductProvider>
      <Layout>
        <Header />
        <New_Arrival />
      </Layout>
    </ProductProvider>
  )
}
