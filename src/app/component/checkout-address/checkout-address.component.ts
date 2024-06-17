import { Component, Input, OnInit } from '@angular/core';
import { OrderDto } from '../../Models/Order';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../MaterialModule';
import { UserService } from '../../Services/user-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-checkout-address',
  standalone: true,
  imports: [FormsModule , MaterialModule],
  templateUrl: './checkout-address.component.html',
  styleUrl: './checkout-address.component.css'
})
export class CheckoutAddressComponent implements OnInit{

  @Input() order!:OrderDto;

  constructor(private userService:UserService , private toast:ToastrService){

  }

  ngOnInit(): void {
  }

  updateAddress(){
    this.userService.updateUserAddress(this.order.shippingAddress).subscribe({
      next:res=>{
        this.order.shippingAddress.id = res as number;
        console.log(this.order.shippingAddress.id)
        this.toast.success('address updated successfully' , "Success");
      },error:err=>{
        this.toast.error(err.error.message , "Failed");
      }
    })
  }

}
