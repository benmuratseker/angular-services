import { Component, Inject, OnInit } from '@angular/core';
import { Product } from './product.model';
//import { productsArray } from './products-data';
import { ProductsService } from './products.service';
import { CART_SERVICE_TOKEN, CartService } from '@core/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
//export class CatalogComponent implements OnInit {

//we can use asnyc pipe on the html side to reduce component complexity
export class CatalogComponent {
  
  // products: Product[] = productsArray;
  
  //products: Product[] = [];
  products : Observable<Product[]> = this.productsService.getProducts();


  //private cart: Product[] = [];

  //adding productService without dependency injection
  // constructor() { 
  //   this.products =  new ProductsService().getProducts();
  // }

  //this one is another way but not the best
  // constructor(private productService : ProductsService) {
  //   this.products = this.productService.getProducts();
  // }

  constructor(
    private productsService : ProductsService, 
    //private cartService : CartService
    @Inject(CART_SERVICE_TOKEN) private cartService : CartService//after provider defined
  ){}
  
  //best way to inject dependencies is onInit
  //with async pipe e don't need this
  // ngOnInit() {
  //   //this.products = this.productsService.getProducts();
  //   this.productsService.getProducts().subscribe((products) => this.products = products);
  //   //setTimeout(() => this.productsService.refreshProducts(), 200);
  // }

  addToCart(product: Product) {
    //this.cart.push(product);
    this.cartService.add(product)
  }
}
