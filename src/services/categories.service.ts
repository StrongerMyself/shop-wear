const db = require('../db.json')
import { Category } from 'ENTITY'

export const getAll = () => {
  return new Promise<Category[]>((resolve) => {
    setTimeout(() => {
      resolve(db.categories)
    }, 200)
  })
}
