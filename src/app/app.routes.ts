import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

export const routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:"home" , component:HomeComponent},
  {path:"login" , component:LoginComponent},
  {path:"register" , component:RegisterComponent},
  {path:"**" , component:LoginComponent},




];
