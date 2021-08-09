export interface ProductType {
  _id?: string
  name: string
  image: string
  current_price: number
  old_price: number | null | undefined
  key: string
  qty: string
}
