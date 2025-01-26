import { Injectable } from "@angular/core";
import { Product } from "@shared/product.model";
import { IProductService } from "@shared/produtcs-service.interface";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class EngineersService implements IProductService {
    getProducts(): Observable<Product[]> {
        
    }
}