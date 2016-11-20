import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../service';
@Component({
  selector: 'cart-item-info',
  templateUrl: './cart-item-info.component.html',
  styleUrls: ['./cart-item-info.component.css']
})
export class CartItemInfoComponent {
  @Input() productName: string = '';
  @Input() productPrice: string = '';

}
