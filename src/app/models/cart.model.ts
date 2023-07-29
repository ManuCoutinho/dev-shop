export type Cart = {
  items: CartItem[]
}

export type CartItem = {
  id: number
  product: string
  name: string
  price: number
  quantity: number
}
