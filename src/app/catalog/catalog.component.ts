import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
//import { productsArray } from './products-data';
import { ProductsService } from './products.service';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  
  // products: Product[] = productsArray;
  products: Product[] = [];
  private cart: Product[] = [];

  //adding productService without dependency injection
  // constructor() { 
  //   this.products =  new ProductsService().getProducts();
  // }

  //this one is another way nut not the best
  // constructor(private productService : ProductsService) {
  //   this.products = this.productService.getProducts();
  // }

  constructor(private productsService : ProductsService){}
  //best way to inject dependencies is onInit
  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  addToCart(product: Product) {
    this.cart.push(product);
  }
}
