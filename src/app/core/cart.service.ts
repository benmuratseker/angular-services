import { computed, Inject, Injectable, InjectionToken, signal } from "@angular/core";
import { Product } from "@shared/product.model";

//to set persistant cart. if reload the page items will be in the cart
export type CartOptions = {
  persistenceType: string,
  persistenceKey: string,
};
//exported to use as provider

export const CART_OPTIONS_TOKEN = new InjectionToken<CartOptions>('CART_OPTIONS');

@Injectable({providedIn: 'root'})
export class CartService {

    // cart : Product[] = [];
    private cartItems = signal<Product []>([]);
    // private cartOptions: CartOptions = {
    //   persistencType: 'local',
    //   persistenceKey: 'cart'
    // };

    constructor(@Inject(CART_OPTIONS_TOKEN) private cartOptions : CartOptions){
      if (this.cartOptions && this.cartOptions.persistenceType === 'local') {
        const cartString = localStorage.getItem(this.cartOptions.persistenceKey);
        const cart: Product[] = cartString ? JSON.parse(cartString) as Product[] : [];
        this.cartItems.set(cart);
      }
    }

    get cart(){
      return this.cartItems.asReadonly();
    }

    add(product: Product) {
        //this.cart.push(product);
        this.cartItems.update((oldCart) => [...oldCart, product]);
        this.storeCart();
    }

    remove(product: Product) {
        //this.cart = this.cart.filter( p => p!== product);
        this.cartItems.update((oldCart) => oldCart.filter(p => p!== product));
        this.storeCart();
    }

  //   get cartTotal() {
  //       return this.cart.reduce((prev, next) => {
  //         let discount = next.discount && next.discount > 0 ? 1 - next.discount : 1;
  //         return prev + next.price * discount;
  //       }, 0);
  //  }

  private storeCart() {
    if (this.cartOptions && this.cartOptions.persistenceType === 'local'){
      localStorage.setItem(this.cartOptions.persistenceKey, JSON.stringify(this.cartItems()));
    }
  }

  get cartTotal() {
    return computed(() => this.cartItems().reduce((prev, next) => {
      let discount = next.discount && next.discount > 0 ? 1 - next.discount : 1;
      return prev + next.price * discount;
    }, 0));
}
}