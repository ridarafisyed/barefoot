import React from "react"
import NavBar from "./navbar"
import Footer from "./footer"

import "../styling/bootstrap.min.css"
import "../styling/layout.css"

export default function Layout({ children }) {
  return (
    <div className="container">
      <NavBar />
      <main>{children}</main>

      <Footer />
    </div>
  )
}
