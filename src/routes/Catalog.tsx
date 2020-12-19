import React, { FunctionComponent } from 'react'
import { CatalogList } from '../features/catalog/components/CatalogList'

interface Props { }

export const Catalog: FunctionComponent<Props> = (props) => {
  return (
    <>
      <CatalogList />
    </>
  )
}

Catalog.displayName = 'Catalog'
