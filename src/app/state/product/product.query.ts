import {Query} from '@datorama/akita';
import {ProductState, ProductStore} from "./product.store";
import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ProductQuery extends Query<ProductState> {
    constructor(protected override store: ProductStore) {
        super(store);
    }

    products$ = this.select('products');
}