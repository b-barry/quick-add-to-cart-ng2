import { Component, Input } from '@angular/core';
import {  Item } from '../../service';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls:[ './cart-item.component.css']
})
export class CartItemComponent {
  @Input() productItems: Item[] = [];
}
