import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {

  constructor(private http:HttpClient) { }

  getTypes(){
    return this.http.get(environment.baseUrl + "ProductType/getTypes");
  }
}
