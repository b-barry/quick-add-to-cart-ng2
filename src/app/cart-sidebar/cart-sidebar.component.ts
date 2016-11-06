import { Component, Input } from '@angular/core';

@Component({
  selector: 'cart-sidebar',
  template: `
    <a href="#0" class="cd-cart" [class.items-added]="itemCount>0">
      <span>{{itemCount}}</span>
    </a>
  `,
  styleUrls: ['./cart-sidebar.component.css']
})
export class CartSidebarComponent {
  @Input() itemCount: number = 0;
}
