import React from "react"
import Layout from "../components/layout"

import { Link } from "gatsby"
import Grid from "@material-ui/core/Grid"

import styled from "../styling/main.module.css"

function products() {
  return (
    <Layout>
      <div>
        <div>
          <h1 className="text-center">Hello form Products Page </h1>
        </div>
        <div className={styled.products}>
          <Grid container spacing={3}>
            {products.map((product, index) => {
              return (
                <Grid item lg={4} xs={12} sm={6} key={index}>
                  <div className={styled.card}>
                    <div className={styled.image_container}>
                      <img
                        src={product.image_thumb}
                        className={styled.cardimage}
                        alt={product.title}
                      />
                    </div>

                    <div className={`styled.cardBody text-center`}>
                      <h3 className={styled.cardTitle}>{product.name}</h3>
                      <span>Rs: {product.price} </span>
                    </div>
                    <div className={styled.cardLink}>
                      <Link to={`/products/${product.slug}`}>View Details</Link>
                      {"  "}
                      <Link to={`/products/${product.slug}`}>Add to Cart</Link>
                    </div>
                  </div>
                </Grid>
              )
            })}
          </Grid>
        </div>
      </div>
    </Layout>
  )
}

export default products
