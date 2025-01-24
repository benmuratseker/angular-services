import { Product } from "@shared/product.model";
//import { productsArray } from './products-data';
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ProductsService {
    private products : Subject<Product[]> = new Subject();

    getProducts() : Observable<Product[]> {
        //return productsArray;
        return this.products;
    }

    // refreshProducts() {
    //     this.products.next(productsArray);
    // }
}