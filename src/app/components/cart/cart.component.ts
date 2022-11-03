import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

import {CartService} from '../../state/cart/cart.service';
import {Observable, Subscription} from "rxjs";
import {CartQuery} from "../../state/cart/cart.query";
import {ShippingService} from "../../state/shipping/shipping.service";
import {Shipping} from "../../state/shipping/shipping.model";
import {ShippingQuery} from "../../state/shipping/shipping.query";
import {Product} from "../../state/product/product.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
    cart$ = this.cartQuery.cartItems$;
    cartProducts!: Product[];
    cartSub: Subscription = Subscription.EMPTY;

    shippingCosts$!: Observable<Shipping[]>;

    checkoutForm: FormGroup = this.formBuilder.group({
        products: new FormControl(null, Validators.required),
        name: new FormControl('Testmann', Validators.required),
        email: new FormControl('testmann@test.com', [Validators.required, Validators.email]),
        address: new FormControl('Teststr. 3', Validators.required),
        shipping: new FormControl('', Validators.required)
    });

    constructor(
        private cartQuery: CartQuery,
        private cartService: CartService,
        private shippingQuery: ShippingQuery,
        private shippingService: ShippingService,
        private formBuilder: FormBuilder,
        private httpClient: HttpClient
    ) {
    }

    ngOnInit(): void {
        this.shippingCosts$ = this.shippingQuery.shippingCosts$;
        this.cartSub = this.cart$.subscribe(cart => {
            this.cartProducts = cart;
            this.checkoutForm.controls['products'].setValue(cart);
        });
    }

    removeFromCart(product: Product) {
        console.log("Product " + product.name + " (" + product.guid + ") removed from cart!");
        this.cartService.removeFromCart(product.guid);
    }

    onSubmit(): void {
        if (this.checkoutForm.valid) {
            const payload = JSON.stringify({
                products: JSON.stringify(this.checkoutForm.controls['products'].value),
                name: JSON.stringify(this.checkoutForm.controls['name'].value),
                email: JSON.stringify(this.checkoutForm.controls['email'].value),
                address: JSON.stringify(this.checkoutForm.controls['address'].value),
                shipping: JSON.stringify(this.checkoutForm.controls['shipping'].value),
            });

            console.log(payload);

            this.httpClient
                .post('http://localhost:8080/api/order/new', payload, {
                    headers: new HttpHeaders().set('content-type', 'application/json').set('accept', 'application/json')
                })
                .subscribe({
                    next: (response) => console.log(response),
                    error: (error) => console.log(error),
                });

            console.warn('Your order has been submitted', this.checkoutForm.value);

            this.cartService.clearCart();
            this.checkoutForm.reset();
            this.cartSub.unsubscribe();
            this.cartProducts = [];
        }
    }
}
