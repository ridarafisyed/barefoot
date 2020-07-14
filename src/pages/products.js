import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import shoes from "../images/testing_shoes.jpg"

import styled from "../styling/main.module.css"

const products = ({ data }) => {
  const {
    allContentfulProducts: { nodes: products },
  } = data

  return (
    <Layout>
      <div className={styled.container}>
        <div>
          <h1 className="text-center">Hello form Products Page </h1>
        </div>
        <div className={styled.products}>
          <Grid container spacing={3}>
            {products.map(product => {
              return (
                <Grid item lg={3} xs={12} sm={6} key={product.id}>
                  <div className={styled.card}>
                    <div className={styled.image_container}>
                      <img
                        src={product.imageCover.fluid.src}
                        className={styled.cardimage}
                        alt={product.title}
                      />
                    </div>

                    <div className={styled.cardBody}>
                      <h3 className={styled.cardTitle}>{product.title}</h3>
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

export const query = graphql`
  {
    allContentfulProducts {
      nodes {
        id
        title
        price
        slug
        imageCover {
          fluid(maxWidth: 250, maxHeight: 250) {
            src
          }
        }
      }
    }
  }
`

export default products
