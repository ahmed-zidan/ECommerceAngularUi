import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {

  }

  getAllProducts(sort:string = '' , brand:number = 0 , type:number = 0,take:number  = 10, skip:number =1){
    return this.http.get(environment.baseUrl + "Product/getProducts?sortedBy="+sort + "&brandId="+brand
      +"&typeId="+type+"&take="+take+"&skip="+skip);
  }

}
