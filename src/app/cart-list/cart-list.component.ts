import { Component, Input } from '@angular/core';
import { Product, Item} from '../service';
@Component({
  selector: 'cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],

})
export class CartListComponent {
  @Input() products: Product[] = [];

  getPriceOfSelectedItemFromProduct(product: Product): string {
    const colorSelected = product
      .items
      .filter((item: Item) => {
        return item.selected;
      })[0].color;
    return product.price[colorSelected];
  }
}
