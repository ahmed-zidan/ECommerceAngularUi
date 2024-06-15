import { Component, OnInit, effect } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../../MaterialModule';
import { BasketService } from '../../Services/basket.service';
import { ICustomerBasket } from '../../Models/BasketModels';
import { MatDialog } from '@angular/material/dialog';
import { UserInfo } from '../../Models/User';

@Component({
  selector: 'app-app-menu',
  standalone: true,
  imports: [RouterOutlet , RouterLink,MaterialModule,RouterLinkActive],
  templateUrl: './app-menu.component.html',
  styleUrl: './app-menu.component.css'
})
export class AppMenuComponent implements OnInit {
  menus:string[] = ["Products","Brands" , "Types"];
  basket!:ICustomerBasket;
  quantity:number = 0;
  user !: UserInfo;
  constructor(private basketService:BasketService){
    effect(()=>{
      this.basket = this.basketService._basket();
      this.quantity = this.basket.basketItem.length;
    })

  }
  ngOnInit(): void {

  }

  getUserInfo(){
     this.user = JSON.parse(localStorage.getItem("userInfo") as string) as UserInfo;
    return this.user;
  }

}
