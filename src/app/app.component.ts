import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppMenuComponent } from './component/app-menu/app-menu.component';
import { SectionHeaderComponent } from './component/section-header/section-header.component';
import { BasketService } from './Services/basket.service';
import { ICustomerBasket } from './Models/BasketModels';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AppMenuComponent,SectionHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ECommerceAngularUi';
  constructor(private basketService:BasketService){

  }
  ngOnInit(): void {
      this.basketService.getBasket().subscribe({
        next:res=>{

          this.basketService._basket.set(res as ICustomerBasket);
        }
      })
  }
}
