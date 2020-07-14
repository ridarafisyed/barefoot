import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import {
  New_Arrival,
  Eid_Collection,
  Formal,
  Casuals,
  Sports,
} from "../components/advertisement"

export default function Home() {
  return (
    <Layout>
      <Header />
      <New_Arrival />
      <Eid_Collection />
      <Formal />
      <Casuals />
      <Sports />
    </Layout>
  )
}
