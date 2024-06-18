import { AfterViewInit, Component, Input } from '@angular/core';
import { OrderDto } from '../../Models/Order';
import { OrderService } from '../../Services/order.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MaterialModule } from '../../MaterialModule';
import { BasketService } from '../../Services/basket.service';

declare var Stripe: (arg0: string) => any;
@Component({
  selector: 'app-checkout-payment',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './checkout-payment.component.html',
  styleUrl: './checkout-payment.component.css'
})
export class CheckoutPaymentComponent implements AfterViewInit {
  @Input() order!:OrderDto;
  cardNumber:any;
  cardExpiry:any;
  cardCVC:any;
  cardError:any;
  stripe:any;
  constructor(private orderService:OrderService , private toast:ToastrService,private router:Router,private basketService:BasketService){

  }

  ngAfterViewInit(): void {
    this.stripe = Stripe('pk_test_51PSlx1P44naSu5Sd658ELvV9vkkPhoQsglY5CXkvVwIBFrHsTvb31xJVvQ2BGE9idXK6Vi5LDwR3Sq4BuQet4hyT00GY3PBZli');
    const elements = this.stripe.elements();

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
        this.basketService._basket.set({basketItem:[],clientSecret:"",deliveryMethodId:0,id:"",paymentIntentId:""});
      }
    })
  }

}
