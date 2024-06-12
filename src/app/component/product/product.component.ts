import { Component, Input } from '@angular/core';
import { ProductList } from '../../Models/ProductModels';
import { CurrencyPipe } from '@angular/common';
import { MaterialModule } from '../../MaterialModule';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe , MaterialModule,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product!:ProductList;
}
