import React from "react"

import Layout from "../components/layout"

import "../styling/detail.css"

export default props => {
  const { pageContext } = props
  const { title, image_full, price, info } = pageContext
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <img
              src={image_full}
              alt={pageContext.name}
              className="img-fluid max-width: 100%"
            />
            <br />
            <br />
            <span>Size Available : </span>
            <button className="btn btn-outline-dark">S</button>
            <button className="btn btn-outline-dark">M</button>
            <button className="btn btn-outline-dark">L</button>
            <button className="btn btn-outline-dark">XL</button>
          </div>

          <div className="col-sm">
            <h2>{title}</h2>
            <h4>Rs : {price}</h4>
            <p>{info}</p>
            <button className="btn btn-warning">Add to Cart</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
