import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http : HttpClient) {

  }
  getBrands(){
    return this.http.get(environment.baseUrl + "Brand/getBrands");
  }
}
