import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";

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

    onSubmit(): void {
        if (this.checkoutForm.valid) {
            const formData: FormData = new FormData();
            formData.append('products', JSON.stringify(this.checkoutForm.controls['products'].value));
            formData.append('name', JSON.stringify(this.checkoutForm.controls['name'].value));
            formData.append('email', JSON.stringify(this.checkoutForm.controls['email'].value));
            formData.append('address', JSON.stringify(this.checkoutForm.controls['address'].value));
            formData.append('shipping', JSON.stringify(this.checkoutForm.controls['shipping'].value));

            this.httpClient
                .post('http://localhost:8080/api/order/new', formData, {headers: new HttpHeaders().set('Content-Type', 'application/json')})
                .subscribe({
                    next: (response) => console.log(response),
                    error: (error) => console.log(error),
                })

            console.warn('Your order has been submitted', this.checkoutForm.value);

            this.cartService.clearCart();
            this.checkoutForm.reset();
            this.cartSub.unsubscribe();
            this.cartProducts = [];
        }
    }

    removeFromCart(productId: number) {
        this.cartService.removeFromCart(productId);
    }
}
