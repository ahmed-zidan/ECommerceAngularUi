export class OrderDto {
  basketId: string = ""
  deliveryMethode: number = 0
  shippingAddress!: ShippingAddress ;
}

export class ShippingAddress {
  id: number = 0
  firstName: string = ""
  lastName: string= ""
  street: string= ""
  city: string= ""
  zipCode: string= ""
  state: string= ""
}

export interface DeliveryMethodsDto {
  shortName: string
  deliveryTime: string
  description: string
  price: number
  id: number
}

export interface OrderToReturnDto {
  buyerEmail: string
  orderDate: string
  shipAddress: ShippingAddress
  deliveryMethod: DeliveryMethodsDto
  orderItems: OrderItem[]
  subTotal: number
  status: number
  paymentIntentId: any
  total: number
}

export interface OrderItem {
  productId: number
  productName: string
  pictureUrl: string
  price: number
  quantity: number
}
