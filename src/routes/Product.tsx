import React, { FunctionComponent } from 'react'

interface Props { }

export const Product: FunctionComponent<Props> = (props) => {
  return (
    <p>Product</p>
  )
}

Product.displayName = 'Product'
