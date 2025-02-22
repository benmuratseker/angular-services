import { Component, Inject, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { CartService } from '@core/cart.service';

@Component({
  selector: 'bot-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  //private cart: Product[] = [];

  constructor(private cartService : CartService) { }

  ngOnInit() { }

  get cartItems() {
    //return this.cart;
    //return this.cartService.cart;
    return this.cartService.cart();
  }

  get cartTotal() {
    // return this.cart.reduce((prev, next) => {
    //   let discount = next.discount && next.discount > 0 ? 1 - next.discount : 1;
    //   return prev + next.price * discount;
    // }, 0);

    //return this.cartService.cartTotal;
    return this.cartService.cartTotal();
  }

  removeFromCart(product: Product) {
    //this.cart.filter(p => p.id !== product.id);
    this.cartService.remove(product);
  }

  getImageUrl(product: Product) {
    if (!product) return '';
    return '/assets/images/robot-parts/' + product.imageName;
  }
}
