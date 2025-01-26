import { Injectable } from "@angular/core";
import { Product } from "@shared/product.model";
import { IProductsService } from "@shared/produtcs-service.interface";
import { Observable, of } from "rxjs";
import { engineers } from "./squad-catalog/engineers";

@Injectable({providedIn: 'root'})
export class EngineersService implements IProductsService {
    getProducts(): Observable<Product[]> {
        return of(engineers);;
    }
}