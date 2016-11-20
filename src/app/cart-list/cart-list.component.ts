import { Component,  OnInit } from '@angular/core';
import { ProductApiService } from '../service';
import { Product, Item } from '../service';
@Component({
  selector: 'cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
  providers: [ProductApiService]

})
export class CartListComponent implements OnInit{
  products: Product[] = [];

  constructor(private productApi: ProductApiService) {
  }
  ngOnInit() {
    // ES6 version
    this.productApi
      .getProducts()
      .then((products) => {
        this.products = products;
      })
      .catch((err) => {
        console.log('Error', err);
      })
    // Traditional version
    // this.productApi
    //   .getProducts()
    //   .then(function (products) {
    //     this.products = products;
    //   }.bind(this))
    //   .catch((err) => {
    //     console.log('Error', err);
    //   })
  }
  getPriceOfSelectedItemFromProduct(product: Product): string {
    const colorSelected = product
      .items
      .filter((item: Item) => {
        return item.selected;
      })[0].color;
    return product.price[colorSelected];
  }
}
