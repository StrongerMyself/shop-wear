import { Product } from 'entity-types'
import { createAsyncAction } from 'typesafe-actions'

export const fetchCatalog = createAsyncAction(
  'FETCH_CATALOG_REQUEST',
  'FETCH_CATALOG_SUCCESS',
  'FETCH_CATALOG_FAILTURE',
)<void, Product[], string>();
