import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { ToastrService } from 'ngx-toastr';
import { MaterialModule } from '../../MaterialModule';
import { ProductList, ProductListPagination } from '../../Models/ProductModels';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  products!:ProductListPagination;
  constructor(private productService : ProductService , private toast:ToastrService){

  }
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next:res=>{
        this.products = res as ProductListPagination;
        console.log(this.products);
      },error:err=>{
        let error = err as Error;
        this.toast.error(error.message);
      }
    })
  }


}
