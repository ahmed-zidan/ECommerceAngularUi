import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../MaterialModule';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OrderSummaryComponent } from '../order-summary/order-summary.component';
import { CheckoutAddressComponent } from '../checkout-address/checkout-address.component';
import { CheckoutDeliveryComponent } from '../checkout-delivery/checkout-delivery.component';
import { CheckoutPaymentComponent } from '../checkout-payment/checkout-payment.component';
import { CheckoutReviewComponent } from '../checkout-review/checkout-review.component';
import { DeliveryMethodsDto, OrderDto, ShippingAddress } from '../../Models/Order';
import { UserService } from '../../Services/user-service.service';
import { BasketService } from '../../Services/basket.service';
import { CdkStepper } from '@angular/cdk/stepper';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [MaterialModule , FormsModule , RouterLink,OrderSummaryComponent,CheckoutAddressComponent,
    CheckoutDeliveryComponent,CheckoutPaymentComponent,CheckoutReviewComponent
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {
  order:OrderDto = {basketId:"",deliveryMethode:0,
    shippingAddress:{
    city:"",
    firstName:"",
    id:0,
    lastName:"",
    state:"",
    street:"",
    zipCode:""
  }};
  constructor(private toast:ToastrService , private route:Router,private userService:UserService,private basketService:BasketService){

  }
  ngOnInit(): void {
    this.userService.getUserAddress().subscribe({
      next:res=>{

        if(res != null)
        this.order.shippingAddress = res as ShippingAddress;

      },error:err=>{
        this.toast.error(err.error.message , "Error");
      }
    })
  }


  createPaymentIntent(stepper:CdkStepper){
    this.basketService.createPaymentIntent().subscribe({
      next:res=>{
        this.toast.success("Payment has been successfully confirmed" , "Success");
        stepper.next();
        console.log(res);
      },error:err=>{
        this.toast.error(err.error.message,"Error");
      }
    })
  }

}
