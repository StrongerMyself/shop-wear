const db = require('../db.json')
import { Product } from 'ENTITY'

export const getAll = () => {
  return new Promise<Product[]>((resolve) => {
    setTimeout(() => {
      resolve(db.products)
    }, 200)
  })
}
