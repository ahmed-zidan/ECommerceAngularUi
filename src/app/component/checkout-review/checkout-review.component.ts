import { Component, Input } from '@angular/core';
import { OrderDto } from '../../Models/Order';
import { BasketSummeryComponent } from '../basket-summery/basket-summery.component';
import { BasketService } from '../../Services/basket.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-checkout-review',
  standalone: true,
  imports: [BasketSummeryComponent],
  templateUrl: './checkout-review.component.html',
  styleUrl: './checkout-review.component.css'
})
export class CheckoutReviewComponent {
  @Input() order!:OrderDto;

}
