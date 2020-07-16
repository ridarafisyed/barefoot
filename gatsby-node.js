// create pagess dynamically

const path = require("path")
const fs = require("fs")

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  const template = path.resolve(`src/templates/product-template.js`)
  const shoes = JSON.parse(
    fs.readFileSync("./src/data/shoes_data2.json", { encoding: "utf-8" })
  )

  shoes.forEach(shoe => {
    createPage({
      path: `/products/${shoe.slug}`,
      component: template,
      context: shoe,
    })
  })
}

// const path = require("path")

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const result = await graphql(`
//     query GetProducts {
//       products: allContentfulProducts {
//         nodes {
//           slug
//         }
//       }
//     }
//   `)

//   result.data.products.nodes.forEach(product => {
//     createPage({
//       path: `/products/${product.slug}`,
//       component: path.resolve(`src/templates/product-template.js`),
//       context: {
//         slug: product.slug,
//       },
//     })
//   })
// }
