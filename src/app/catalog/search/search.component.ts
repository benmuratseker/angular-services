import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
//import { productsArray } from '../products-data'
import { ProductsService } from '@catalog/products.service';
import { CartService } from '@core/cart.service';

@Component({
  selector: 'bot-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit{
  // products: Product[] = [...productsArray];
  products: Product[] = [];
  searchTerm: string = '';
  //cart: Product[] = [];

  constructor(private productsService : ProductsService, private cartService: CartService) { }

  // ngOnInit() {
  //   //this.products = [...productsArray];
  //   this.products = this.productsService.getProducts();
  // }

  ngOnInit() {
    //this.products = this.productsService.getProducts();
    this.productsService.getProducts().subscribe((products) => this.products = products);
    setTimeout(() => this.productsService.refreshProducts(), 200);
  }

  addToCart(product: Product) {
    //this.cart.push(product);
    this.cartService.add(product);
  }

  filter(event: Event) {
    this.searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
  }

  getFilteredProducts() {
    return this.searchTerm === ''
      ? this.products
      : this.products.filter(
        (product: Product) => product.name.toLowerCase().includes(this.searchTerm)
      );
  }
}
