import { Component, OnInit } from '@angular/core';
import { ProductList } from '../../Models/ProductModels';
import { ProductService } from '../../Services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MaterialModule } from '../../MaterialModule';
import { FormsModule } from '@angular/forms';

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
constructor(private productService : ProductService , private activeRoute:ActivatedRoute , private toast:ToastrService){

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
  }
}
