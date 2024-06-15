import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { UserInfo } from "../Models/User";

export const authGuard: CanActivateFn = (route, state) => {
  let taost = inject(ToastrService);
  let router = inject(Router);
  let token = JSON.parse(localStorage.getItem('userInfo')as string) as UserInfo ;
  if(token != undefined){
    return true;
  }else{
    taost.warning("please login first");
    router.navigate(['/login'],{queryParams:{returnUrl:state.url}});
    return false;
  }

};
