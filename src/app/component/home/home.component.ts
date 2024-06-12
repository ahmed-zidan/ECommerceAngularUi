import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { ToastrService } from 'ngx-toastr';
import { MaterialModule } from '../../MaterialModule';
import { ProductListPagination } from '../../Models/ProductModels';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from '../product/product.component';
import { Brand } from '../../Models/BrandModels';
import { ProductType } from '../../Models/ProductTypeModels';
import { ProductTypeService } from '../../Services/product-type.service';
import { BrandService } from '../../Services/brand.service';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MaterialModule,FormsModule,ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  products!:ProductListPagination;
  brands!:Brand[];
  productTypes!:ProductType[];
  sort:string = '' ;
  sortopt = [
    {name : "Alphabetical" , value:"name"},
    {name : "price:Low to High" , value:"priceAsc"},
    {name : "price:High to Low" , value:"priceDesc"},
  ]
  brand:number = 0 ;
  type:number = 0;
  take:number  = 9;
  skip:number =0;
  totalCount:number  = 0;
  searchText:string  = "";


  constructor(private productService : ProductService , private toast:ToastrService,private typeService:ProductTypeService,
    private brandService:BrandService
  ){

  }
  ngOnInit(): void {
   this.getProducts();
   this.getBrands();
   this.getTypes();
  }

  getBrands(){
    this.brandService.getBrands().subscribe({
      next:res=>{
        //this.brands = res as Brand[];
        this.brands = [{id:0,name:"All"} ,...res as Brand[] ];
      },error:err=>{
        this.toast.error(err.message);
      }
    })
  }
  getTypes(){
    this.typeService.getTypes().subscribe({
      next:res=>{
        this.productTypes = [{id:0,name:"All"} , ...res as  ProductType[]];

      },error:err=>{
        this.toast.error(err.message);
      }
    })
  }

  getProducts(){
    this.productService.getAllProducts(this.sort , this.brand,this.type,this.take,this.skip ,this.searchText ).subscribe({
      next:res=>{
        this.products = res as ProductListPagination;
        this.totalCount = this.products.count;
      },error:err=>{
        let error = err as Error;
        this.toast.error(error.message);
      }
    })
  }


  selectBrand(brandId : number){
    this.brand = brandId;
    this.skip = 0;
    this.getProducts();
  }

  selectType(typeId:number){
    this.type = typeId;
    this.skip = 0;
    this.getProducts();
  }

  onSelectChange(value:string){
    this.sort = value;
    this.getProducts();
  }

  pageChanged(event: any) {
    this.skip = event.pageIndex;
    this.getProducts();
  }

  Search(value:string){
    this.searchText = value;
    this.skip = 0;
    this.getProducts();
  }

  Reset(search : any){
    search.value = "";
    this.searchText ="";
    this.skip = 0;
    this.getProducts();
  }
}
