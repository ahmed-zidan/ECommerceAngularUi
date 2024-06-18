import { Component } from '@angular/core';
import { MaterialModule } from '../../MaterialModule';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-checkout-success',
  standalone: true,
  imports: [MaterialModule,RouterLink],
  templateUrl: './checkout-success.component.html',
  styleUrl: './checkout-success.component.css'
})
export class CheckoutSuccessComponent {

}
