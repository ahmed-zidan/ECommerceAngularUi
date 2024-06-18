import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../Services/order.service';
import { ToastrService } from 'ngx-toastr';
import { MaterialModule } from '../../MaterialModule';
import { OrderToReturnDto } from '../../Models/Order';
import { UserInfo } from '../../Models/User';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [MaterialModule,DatePipe,RouterLink],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit {
  orders!:OrderToReturnDto[];
  constructor(private orderService:OrderService , private toast:ToastrService){

  }
  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem("userInfo") as string) as UserInfo;
    this.orderService.getOrders(user.email).subscribe({
      next:res=>{
        this.orders = res as OrderToReturnDto[];
      },error:err=>{
        this.toast.error(err.error.message , "Failed");
      }
    })
  }
}
