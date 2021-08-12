export interface ProductType {
  _id?: string
  name: string
  image: string
  current_price: number
  old_price: number | null | undefined
  key: string
  qty: string
}

export interface CreateOrderType {
  date: string
  discount: number
  sub_total: number
  payment_method: string
  order_list: {
    _id: string
    name: string
    unit_price: string
    qty: string
    price: number
  }[]
  delivery: {
    address: string
    full_name: string
    city: string
    country: string
    postal_code: number
    email: string
    tel: string
  }
  shipping: {
    address: string
    full_name: string
    city: string
    country: string
    postal_code: number
    instructions: string
    tel: string
  }
}
