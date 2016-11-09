import { Component, Input } from '@angular/core';

@Component({
  selector: 'cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
  
})
export class CartListComponent {
  @Input() products = [];

}
