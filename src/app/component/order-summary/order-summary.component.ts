import { Component, OnInit, effect } from '@angular/core';
import { ICustomerBasket, IOrderSummary } from '../../Models/BasketModels';
import { BasketService } from '../../Services/basket.service';
import { Toast } from 'ngx-toastr';
import { CurrencyPipe } from '@angular/common';
import { MaterialModule } from '../../MaterialModule';
import { RouterLink } from '@angular/router';
import { DeliveryMethodsDto } from '../../Models/Order';
import { OrderService } from '../../Services/order.service';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [CurrencyPipe , MaterialModule,RouterLink],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css'
})
export class OrderSummaryComponent implements OnInit {
  orderSummary!:IOrderSummary;
  basket!:ICustomerBasket;
  //delivery!:DeliveryMethodsDto;
  constructor(private basketService:BasketService,private orderService:OrderService){
    effect(()=>{
      this.basket = this.basketService._basket();
      let shepp = this.orderService._Delivery().price;
      let subt = this.basket.basketItem.reduce((a,b)=> (b.quantity*b.price)+a,0)
      this.orderSummary = {shipping :shepp,subtotals:subt,totals:shepp+subt};
    })
  }
  ngOnInit(): void {
    this.basket = this.basketService._basket();
    let shepp = 0;
    let subt = this.basket.basketItem.reduce((a,b)=> (b.quantity*b.price)+a,0)
    this.orderSummary = {shipping :shepp,subtotals:subt,totals:shepp+subt};
  }
}
