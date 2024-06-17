import { Component, Input } from '@angular/core';
import { OrderDto } from '../../Models/Order';
import { OrderService } from '../../Services/order.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MaterialModule } from '../../MaterialModule';

@Component({
  selector: 'app-checkout-payment',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './checkout-payment.component.html',
  styleUrl: './checkout-payment.component.css'
})
export class CheckoutPaymentComponent {
  @Input() order!:OrderDto;
  constructor(private orderService:OrderService , private toast:ToastrService,private router:Router){

  }
  ConfirmPaid(){
    let basketId = localStorage.getItem("basketId")
    if(basketId)
      this.order.basketId = basketId;
    else this.toast.error("Basket is not found");
    this.orderService.creatOrder(this.order).subscribe({
      next:res=>{
        this.toast.success("Order Has been created successfully");
        this.router.navigate(["checkoutSuccess"]);
      }
    })
  }
}
