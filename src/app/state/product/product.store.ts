import {Store, StoreConfig} from '@datorama/akita';
import {Injectable} from "@angular/core";
import {Product} from "./product.model";

export interface ProductState {
    products: Product[];
}

export function createInitialState(): ProductState {
    return {
        products: []
    };
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'session'})
export class ProductStore extends Store<ProductState> {
    constructor() {
        super(createInitialState());
    }
}