import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'Pant','This is a white Pant', 700, '/assets/P1.jpg'),
    new Product(2, 'BT-Shirt', 'This is a Boy T-Shirt', 900, '/assets/T1.jpg'),
    new Product(3, 'GT-Shirt', 'This is a white Pant', 980, '/assets/T2.jpg'),
    new Product(4, 'GH-Hood', 'This is a white Pant', 1000, '/assets/T3.jpg'),
    new Product(5, 'BS-Shirt', 'This is a white Pant', 800, '/assets/T4.jpg'),
    new Product(6, 'Random','This is a white Pant', 900, '/assets/P1.jpg'),
    new Product(7, 'Random', 'This is a white Pant', 900, '/assets/P1.jpg'),
    ]

  constructor() { }

  getProducts(): Product[] {

    return this.products

}
}
