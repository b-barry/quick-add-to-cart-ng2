import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'header-cart',
  template: `
    <header>
		  <h1>{{ title }}</h1>
	  </header>
  `,
  styleUrls: [ 'header.component.css'],
})
/**
 * HeaderComponent
 */
class HeaderComponent {
  title: string = 'Quick Add to Cart in NG2';

  constructor() { }
}
