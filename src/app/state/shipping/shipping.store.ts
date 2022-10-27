import {Store, StoreConfig} from '@datorama/akita';
import {Injectable} from "@angular/core";
import {Shipping} from "./shipping.model";

export interface ShippingState {
    shipping: Shipping[];
}

export function createInitialState(): ShippingState {
    return {
        shipping: []
    };
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'session'})
export class ShippingStore extends Store<ShippingState> {
    constructor() {
        super(createInitialState());
    }
}