import { Component, OnInit, signal } from '@angular/core';
import { BasketService } from '../../Services/basket.service';
import { ToastrService } from 'ngx-toastr';
import { IBasketItem, ICustomerBasket, basket } from '../../Models/BasketModels';
import { MaterialModule } from '../../MaterialModule';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { OrderSummaryComponent } from '../order-summary/order-summary.component';


@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [MaterialModule,FormsModule,CurrencyPipe,OrderSummaryComponent],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent implements OnInit {
  myBasket!:ICustomerBasket;
  constructor(private basketService:BasketService , private toast:ToastrService){
  }
  ngOnInit(): void {
    this.basketService.getBasket().subscribe({
      next:res=>{
        this.myBasket = res as ICustomerBasket;
      },error:err=>{
        this.toast.error(err.error.message,"Error");
      }
    })
  }

  deleteItem(id:Number){
    let items = this.myBasket.basketItem.filter(x=>x.id != id);
    this.myBasket.basketItem = items;
    this.basketService.updateBasket(this.myBasket).subscribe({
      next:res=>{
        this.toast.success("Data deleted successfully" , "Success");
        this.basketService._basket.set(res as ICustomerBasket);
      },error:err=>{
        this.toast.error(err.error.message,"Error");
      }
    })
  }

  decreaseItem(item:IBasketItem){
    item.quantity -= 1;
    if(item.quantity == 0){
      let items = this.myBasket.basketItem.filter(x=>x.id != item.id);
      this.myBasket.basketItem = items;
    }
    this.basketService.updateBasket(this.myBasket).subscribe({
      next:res=>{
        this.myBasket = res as ICustomerBasket;
        this.basketService._basket.set(this.myBasket);
      }
    })
  }
  increaseItem(item:IBasketItem){
    item.quantity += 1;
    this.basketService.updateBasket(this.myBasket).subscribe({
      next:res=>{
        this.myBasket = res as ICustomerBasket;
        this.basketService._basket.set(this.myBasket);
      }
    })

  }

}
