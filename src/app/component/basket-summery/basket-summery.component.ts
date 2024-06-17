import { Component, Input, OnInit } from '@angular/core';
import { IBasketItem, ICustomerBasket } from '../../Models/BasketModels';
import { BasketService } from '../../Services/basket.service';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../MaterialModule';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-basket-summery',
  standalone: true,
  imports: [FormsModule,MaterialModule,CurrencyPipe],
  templateUrl: './basket-summery.component.html',
  styleUrl: './basket-summery.component.css'
})
export class BasketSummeryComponent implements OnInit {
  myBasket!:ICustomerBasket;
 @Input() disableIncrease = false;
  constructor(private basketService:BasketService,private toast:ToastrService){

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
