import React, { createContext } from "react"

const ProductContext = createContext()

const ProductProvider = props => {
  return <ProductContext.Provider>{props.children}</ProductContext.Provider>
}
const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }
