import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../Services/order.service';
import { UserInfo } from '../../Models/User';
import { OrderToReturnDto } from '../../Models/Order';
import { OrderSummaryComponent } from '../order-summary/order-summary.component';
import { BasketSummeryComponent } from '../basket-summery/basket-summery.component';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-detail',
  standalone: true,
  imports: [CurrencyPipe,FormsModule],
  templateUrl: './order-detail.component.html',
  styleUrl: './order-detail.component.css'
})
export class OrderDetailComponent implements OnInit {
  order!:OrderToReturnDto;

  constructor(private activeRoute:ActivatedRoute,private orderService:OrderService){

  }

  ngOnInit(): void {
    let id = String(this.activeRoute.snapshot.paramMap.get('id'));
    let user = JSON.parse(localStorage.getItem("userInfo") as string) as UserInfo;
    this.orderService.getOrder(user.email , id).subscribe({
      next:res=>{
        this.order = res as OrderToReturnDto;
       }
    });

  }
}
