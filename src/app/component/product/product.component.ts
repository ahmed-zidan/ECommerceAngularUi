import { Component, Input } from '@angular/core';
import { ProductList } from '../../Models/ProductModels';
import { CurrencyPipe } from '@angular/common';
import { MaterialModule } from '../../MaterialModule';
import { RouterLink } from '@angular/router';
import { BasketService } from '../../Services/basket.service';
import { IBasketItem, ICustomerBasket } from '../../Models/BasketModels';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe , MaterialModule,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product!:ProductList;
  constructor(private basketService:BasketService , private toast:ToastrService){

  }
  addProductToBasket(){
    let itemBaket:IBasketItem =  {
      id : this.product.id,
      brand :this.product.productBrandName,
      pictureUrl : this.product.pictureUrl,
      price : this.product.price,
      productName :this.product.name,
      quantity : 1,
      type : this.product.productTypeName
    };
    this.basketService.getBasket().subscribe({
      next:res=>{
        let basket = res as ICustomerBasket;
        console.log(basket);
        let existItem = basket.basketItem.filter(x=>x.id == this.product.id)[0];
        if(existItem != null){
          existItem.quantity += itemBaket.quantity;
        }else{
          basket.basketItem.push(itemBaket);
        }
        this.basketService.updateBasket(basket).subscribe({
          next:res=>{
            this.toast.success("Product Added successfully to basket" , "Success");
            this.basketService._basket.set(res as ICustomerBasket);
            //let quantity = basket.basketItem.length;
            //localStorage.setItem("quantity",quantity.toString());
          },error:err=>{
            this.toast.error(err.error.message , "error");
          }
        });
      }
    });

  }
}
