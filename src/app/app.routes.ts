import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';

export const routes: Routes = [
  {path:"" , component:HomeComponent,data:{breadcrumb:"Home"}},
  {path:"home" , component:HomeComponent,data:{breadcrumb:"Home"}},
  {path:"login" , component:LoginComponent,data:{breadcrumb:"login"}},
  {path:"register" , component:RegisterComponent,data:{breadcrumb:"register"}},
  {path:"productDetail/:id" , component:ProductDetailComponent,data:{breadcrumb:"product Detail"}},
  {path:"**" , component:LoginComponent,data:{breadcrumb:"Login"}},




];
