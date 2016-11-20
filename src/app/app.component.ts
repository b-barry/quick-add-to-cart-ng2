import { Component, OnInit } from '@angular/core';
import { ProductApiService } from './service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductApiService]
})
export class AppComponent implements OnInit {
  title = 'app works!';
  products= [];

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
}
