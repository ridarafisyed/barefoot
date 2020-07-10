import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"

const productTemplate = ({
  data: {
    contentfulProducts: {
      title,
      price,
      imageCover: { fixed },
      description: { description },
    },
  },
}) => {
  return (
    <Layout>
      <h2>{title}</h2>
      <Image fixed={fixed} alt={title} />
      <h4>Rs : {price}</h4>
      <p>{description}</p>
      <button>Add to Cart</button>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProduct($slug: String) {
    contentfulProducts(slug: { eq: $slug }) {
      title
      price
      imageCover {
        fixed(width: 400) {
          ...GatsbyContentfulFixed
        }
      }
      description {
        description
      }
    }
  }
`

export default productTemplate
