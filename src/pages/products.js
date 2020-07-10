import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"

export const query = graphql`
  {
    allContentfulProducts {
      nodes {
        id
        title
        price
        slug
        imageCover {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

const products = ({ data }) => {
  const {
    allContentfulProducts: { nodes: products },
  } = data

  return (
    <Layout>
      <h1>Hello form Product pages </h1>
      {products.map(product => {
        return (
          <div key={product.id}>
            <Image fluid={product.imageCover.fluid} alt={product.title} />
            <h2>{product.title}</h2>
            <span>Rs : {product.price}</span>
            <Link to={`/products/${product.slug}`}>View Details</Link>
          </div>
        )
      })}
    </Layout>
  )
}

export default products
