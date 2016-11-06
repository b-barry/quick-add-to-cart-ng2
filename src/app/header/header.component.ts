import { Component } from '@angular/core';

@Component({
  selector: 'header-cart',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css'],
})
/**
 * HeaderComponent
 */
export class HeaderComponent {
  title: string = 'Quick Add to Cart in NG2';

  constructor() { }
}
