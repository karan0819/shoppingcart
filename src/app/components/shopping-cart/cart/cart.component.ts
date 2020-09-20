import { Component, OnInit } from '@angular/core';
import { MessangerService } from '../../../services/messanger.service';
import { Product } from '../../../models/product';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  [x: string]: any;

  cartItems = [];
  cartTotal = 0;
  constructor(private msg: MessangerService) { }

  ngOnInit(): void {
    this.msg.getMsg().subscribe((product: Product) => {
     this.addProductToCart(product)
      })
  }

  addProductToCart(product: Product) {
    for (let i in this.cartItems) {
      if (this.cartItems[i].id === product.id) {
        this.cartItems[i].qty++
      }
      else {
        this.cartItems.push({
          id: product.id,
          productname: product.name,
          qty: 1,
          price: product.price
        })
      }
    }
      this.cartTotal = 0
      this.cartItems.forEach(item => {
        this.cartTotal += (item.qty * item.price)
      })
    }
  }
