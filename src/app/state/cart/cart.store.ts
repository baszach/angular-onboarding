import {EntityState, EntityStore, StoreConfig} from "@datorama/akita";
import {Injectable} from "@angular/core";
import {Product} from "../product/product.model";

export interface CartState extends EntityState<Product> {
}

@Injectable({
    providedIn: 'root',
})
@StoreConfig({name: 'cart', resettable: true})
export class CartStore extends EntityStore<CartState> {
    constructor() {
        super();
    }
}