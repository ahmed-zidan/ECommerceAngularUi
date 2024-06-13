import { Component, OnInit, effect } from '@angular/core';
import { ICustomerBasket, IOrderSummary } from '../../Models/BasketModels';
import { BasketService } from '../../Services/basket.service';
import { Toast } from 'ngx-toastr';
import { CurrencyPipe } from '@angular/common';
import { MaterialModule } from '../../MaterialModule';
import { RouterLink } from '@angular/router';

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
  constructor(private basketService:BasketService){
    effect(()=>{
      this.basket = this.basketService._basket();
      let shepp = 0;
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
