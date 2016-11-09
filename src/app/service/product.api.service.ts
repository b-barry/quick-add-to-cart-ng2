import { Injectable } from '@angular/core';

export interface Item {
  imageSrc: string;
  color: string;
  selected: boolean;
}
export interface Price {
  red: string;
  blue: string;
  yellow: string;
}
export interface Product {
  items: Item[];
  price: Price;
  name: string
}

export interface ColorCustomization {
  name: string;
  selected: boolean
}

export interface SizeCustomization {
  small: boolean;
  medium: boolean;
  large: boolean;
}

export interface Customization {
  color: ColorCustomization[];
  size: SizeCustomization;
}

@Injectable()
export class ProductApiServiceMock {
  mockProducts: Product[] = [
    {
      items: [
        {
          imageSrc: 'img/thumb-1.jpg',
          color: 'blue',
          selected: true
        },
        {
          imageSrc: 'img/thumb-2.jpg',
          color: 'red',
          selected: false
        },
        {
          imageSrc: 'img/thumb-3.jpg',
          color: 'yellow',
          selected: false
        }
      ],
      name: 'Product 1',
      price: {
        red: '$9.99',
        blue: '$19.99',
        yellow: '$29.99'
      }
    }
  ];
  getProducts(): Promise<Product[]> {
    return Promise.resolve(this.mockProducts);
  }
}
