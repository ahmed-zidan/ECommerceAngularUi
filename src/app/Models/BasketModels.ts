import { v4 as uuidv4 } from 'uuid';

export interface ICustomerBasket {
  id: string
  basketItem: IBasketItem[]
}

export interface IBasketItem {
  id: Number
  productName: string
  price: number
  quantity: number
  pictureUrl: string
  brand: string
  type: string
}


export interface IOrderSummary {
  subtotals:number;
  shipping:number;
  totals:number;
}


export class basket implements ICustomerBasket{
  id = uuidv4();
  basketItem = [];

}
