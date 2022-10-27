import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Subscription} from "rxjs";
import {ProductStore} from "./product.store";
import {Product} from "./product.model";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(private productStore: ProductStore, private http: HttpClient) {
    }

    fetchProducts(): void {
        this.http.get<Product[]>(
            environment.appUrl + '/api/products'
        ).subscribe(products => {
            this.productStore.update({products: products});
        });
    }
}
