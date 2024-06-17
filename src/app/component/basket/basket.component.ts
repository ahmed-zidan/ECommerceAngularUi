import { Component, OnInit, signal } from '@angular/core';
import { MaterialModule } from '../../MaterialModule';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { OrderSummaryComponent } from '../order-summary/order-summary.component';
import { RouterLink } from '@angular/router';
import { BasketSummeryComponent } from '../basket-summery/basket-summery.component';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [MaterialModule,FormsModule,CurrencyPipe,OrderSummaryComponent,RouterLink,BasketSummeryComponent],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent implements OnInit {
  constructor(){
  }
  ngOnInit(): void {

  }

}
