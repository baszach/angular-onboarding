import {Injectable} from '@angular/core';
import {Product} from '../product/product.model';
import {CartStore} from "./cart.store";

@Injectable({
    providedIn: 'root',
})
export class CartService {
    constructor(private cartStore: CartStore) {
    }

    removeFromCart(productId: number) {
        this.cartStore.remove(productId);
    }

    addToCart(product: Product) {
        this.cartStore.add(product);
    }

    clearCart() {
        this.cartStore.reset();
    }
}
