/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require(`path`)
module.exports = {
  siteMetadata: {
    title: `BareFoot Online Shoes Store`,
    description: ``,
    author: `@ridarafisyed`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },

    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `e0wx75ei02cw`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "MdLHsQjFEzQHcLTd0R44KJSEWyEN7xk5hVHcepFUph0",
      },
    },
  ],
}
