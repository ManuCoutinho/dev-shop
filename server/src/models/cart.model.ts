export interface Cart {
  items: Items[]
}

export type Items = {
  id: number
  product: string
  name: string
  price: number
  quantity: number
}
