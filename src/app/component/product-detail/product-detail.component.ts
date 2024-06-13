import { Component, OnInit } from '@angular/core';
import { ProductList } from '../../Models/ProductModels';
import { ProductService } from '../../Services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MaterialModule } from '../../MaterialModule';
import { FormsModule } from '@angular/forms';
import { IBasketItem, ICustomerBasket } from '../../Models/BasketModels';
import { BasketService } from '../../Services/basket.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [MaterialModule , FormsModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
product !: ProductList;
buyText:number = 1;
basket!:ICustomerBasket;
constructor(private productService : ProductService ,private baskketService:BasketService, private activeRoute:ActivatedRoute ,
  private toast:ToastrService,private route:Router){

}
  ngOnInit(): void {
    let id = String(this.activeRoute.snapshot.paramMap.get('id'));
    console.log(id);
    this.productService.getProduct(id).subscribe({
      next:res=>{
        this.product = res as ProductList;
      },error:err=>{
        this.toast.error(err.error.message , "error");
      }
    })
    this.baskketService.getBasket().subscribe({
      next:res=>{
        this.basket = res as ICustomerBasket;
      }
    })

  }

  addToCart(){
    let item = this.basket.basketItem.filter(x=>x.id == this.product.id)[0];
    if(item == null){
      this.basket.basketItem.push(this.getItemBasket());
    }else{
      item.quantity += this.buyText;
    }
    this.baskketService.updateBasket(this.basket).subscribe({
      next:res=>{
        this.basket = res as ICustomerBasket;
        this.baskketService._basket.set(this.basket);
        this.toast.success("Product has been added successfully" , "Congrats");
        this.route.navigate(["/home"]);
      },error:err=>{
        this.toast.error(err.error.message,"Error");
      }
    })
  }

  getItemBasket():IBasketItem{
    let item:IBasketItem = {
      id:this.product.id,
      brand :this.product.productBrandName,
      pictureUrl:this.product.pictureUrl,
      price:this.product.price,
      productName:this.product.name,
      quantity:this.buyText,
      type:this.product.productTypeName
    }
    return item;
  }

}
