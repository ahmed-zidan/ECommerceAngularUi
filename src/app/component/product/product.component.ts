import { Component, Input } from '@angular/core';
import { ProductList } from '../../Models/ProductModels';
import { CurrencyPipe } from '@angular/common';
import { MaterialModule } from '../../MaterialModule';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe , MaterialModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product!:ProductList;
}
