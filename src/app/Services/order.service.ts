import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, signal } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { DeliveryMethodsDto, OrderDto } from '../Models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  _Delivery = signal<DeliveryMethodsDto>({deliveryTime:"",description:"",price:0,shortName:"",id:0});
  constructor(private http:HttpClient) {

  }

  getDeliveryMethods(){
    return this.http.get(environment.baseUrl + "Order/getDeliveryMethods");
  }

  creatOrder(order:OrderDto){
    return this.http.post(environment.baseUrl+"Order/createOrder",order);
  }

  getOrders(email:string){
    return this.http.get(environment.baseUrl+"Order/getOrders?email="+email);
  }
  getOrder(email:string , id:string){
    return this.http.get(environment.baseUrl+"Order/getOrder?id="+id+"&email="+email);
  }
}
