import { Component, Input, OnInit } from '@angular/core';
import { DeliveryMethodsDto, OrderDto, ShippingAddress } from '../../Models/Order';
import { OrderService } from '../../Services/order.service';
import { ToastrService } from 'ngx-toastr';
import { MaterialModule } from '../../MaterialModule';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout-delivery',
  standalone: true,
  imports: [MaterialModule , FormsModule],
  templateUrl: './checkout-delivery.component.html',
  styleUrl: './checkout-delivery.component.css'
})
export class CheckoutDeliveryComponent implements OnInit {
  @Input() order!:OrderDto;
  currDelivery=  this.orderService._Delivery();
  DeliveryMethodsDto:DeliveryMethodsDto[] = [];
constructor(private orderService:OrderService , private toast:ToastrService){

}
  ngOnInit(): void {
    //this.currDelivery.id = 1;
    console.log(this.currDelivery.id);
    this.orderService.getDeliveryMethods().subscribe({
      next:res=>{
       this.DeliveryMethodsDto = res as DeliveryMethodsDto[];
      },error:err=>{
        console.log(err);
      }
    })
  }

  changeDelivery(item:DeliveryMethodsDto){
    this.order.deliveryMethode = item.id;
    this.orderService._Delivery.set(item);
  }
}
