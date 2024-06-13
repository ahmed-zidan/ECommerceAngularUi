import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { IBasketItem, ICustomerBasket, basket } from '../Models/BasketModels';
import { ProductList } from '../Models/ProductModels';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  _basket = signal<ICustomerBasket>({basketItem:[] , id:"0"});
  constructor(private http:HttpClient) {

   }
   getBasket(){
    let basketId = localStorage.getItem("basketId");
    if(basketId == undefined){
      basketId = new basket().id;
      localStorage.setItem("basketId" , basketId);
    }
    return this.http.get(environment.baseUrl + "Basket/getBasket/" +basketId);
   }
   updateBasket(Basket : ICustomerBasket){
    return this.http.put(environment.baseUrl + "Basket/updateBasket/" , Basket);
   }
   deleteBasket(key : string){
    return this.http.delete(environment.baseUrl + "Basket/deleteBasket/" + key);
   }



}
