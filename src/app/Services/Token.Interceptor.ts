import { HttpInterceptorFn } from '@angular/common/http';
import { UserInfo } from '../Models/User';
export const TokenInterceptor: HttpInterceptorFn = (req, next) => {
  let token = JSON.parse(localStorage.getItem("token") as string) as UserInfo;
  if(token != undefined){
  let tokenReq = req.clone({
    setHeaders:{
      Authorization:'bearer '+token.token
    }
  })
  return next(tokenReq);
  }else{
    return next(req);
  }

};
