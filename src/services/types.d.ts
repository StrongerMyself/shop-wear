declare module 'ROOT' {
  export type Services = typeof import('./index').default;
}

declare module 'ENTITY' {
  export interface Category {
    id: 1
    title: string
    decription: string
  }

  export interface Product {
    id: 1
    title: string
    price: number
    caregoryId: number
    decription: string
  }
}
