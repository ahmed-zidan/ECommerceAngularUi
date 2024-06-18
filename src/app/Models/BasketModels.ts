import { v4 as uuidv4 } from 'uuid';

export interface ICustomerBasket {
  id: string
  basketItem: IBasketItem[],
  deliveryMethodId:number;
  clientSecret:string
  paymentIntentId:string
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
  deliveryMethodId: number = 0;
  clientSecret: string = "";
  paymentIntentId: string = "";
  id = uuidv4();
  basketItem = [];

}
