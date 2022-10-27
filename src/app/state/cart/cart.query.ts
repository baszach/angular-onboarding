import {QueryEntity} from "@datorama/akita";
import {CartState, CartStore} from "./cart.store";
import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class CartQuery extends QueryEntity<CartState> {
    constructor(protected cartStore: CartStore) {
        super(cartStore);
    }

    cartItems$ = this.selectAll();
    cartItems = this.getAll();
}