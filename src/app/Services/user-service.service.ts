import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLoginDto, UserRegisterDto } from '../Models/User';
import { environment } from '../../environments/environment.development';
import { ShippingAddress } from '../Models/Order';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {

   }

   login(user:UserLoginDto){
    return this.http.post(environment.baseUrl+"Account/login" , user);
   }

   register(user:UserRegisterDto){
    return this.http.post(environment.baseUrl+"Account/register" , user);
   }

   checkEmailExist(email:string){
    return this.http.post(environment.baseUrl+"Account/checkEmailExist" , email);
   }
   getUserAddress(){
    return this.http.get(environment.baseUrl+"Account/getAddress");
   }
   updateUserAddress(address:ShippingAddress){
    return this.http.put(environment.baseUrl+"Account/updateAddress",address);
   }

}
