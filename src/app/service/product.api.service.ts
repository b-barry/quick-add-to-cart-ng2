import { Injectable } from '@angular/core';

export class Item {
  imageSrc: string;
  color: string;
  selected: boolean;
}
export class Price {
  red: string;
  blue: string;
  yellow: string;
}
export class Product {
  items: Item[];
  price: Price;
  name: string
}

export class ColorCustomization {
  name: string;
  selected: boolean
}

export class SizeCustomization {
  small: boolean;
  medium: boolean;
  large: boolean;
}

export class Customization {
  color: ColorCustomization[];
  size: SizeCustomization;
}

@Injectable()
export class ProductApiServiceMock {

  getProducts(): Promise<Product[]> {
    const mockProducts: Product[] = [
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
    return Promise.resolve(mockProducts);
  }
}
