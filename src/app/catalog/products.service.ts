import { Product } from "@shared/product.model";
//import { productsArray } from './products-data';
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { IProductsService } from "@shared/produtcs-service.interface";

@Injectable({ providedIn: 'root' })
export class ProductsService implements IProductsService{
    private products : Subject<Product[]> = new Subject();

    constructor(private httpClient : HttpClient){}//need to add module to app.module too

    getProducts() : Observable<Product[]> {
        //return productsArray;
        //return this.products;

        //fetch returns a promise
        // fetch('api/products')
        //     .then((resp) => resp.json()
        //         .then((productsArray) => {
        //             this.products.next(productsArray)
        //         })
        // );
        //return this.products;
        
        //httpClient returns an observable
        return this.httpClient.get<Product[]>('/api/products');
        
    }

    // refreshProducts() {
    //     this.products.next(productsArray);
    // }
}