import {Query} from '@datorama/akita';
import {ShippingState, ShippingStore} from "./shipping.store";
import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ShippingQuery extends Query<ShippingState> {
    constructor(protected override store: ShippingStore) {
        super(store);
    }

    shippingCosts$ = this.select('shipping');
}