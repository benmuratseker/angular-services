import { Observable } from "rxjs";
import { Product } from "./product.model";

export interface IProductService {
    getProducts(): Observable<Product[]>
}