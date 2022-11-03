import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Product} from '../../state/product/product.model';
import {CartService} from '../../state/cart/cart.service';
import {ProductQuery} from "../../state/product/product.query";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {
    product: Product | undefined;
    productSub: Subscription = Subscription.EMPTY;

    constructor(
        private route: ActivatedRoute,
        private cartService: CartService,
        private productQuery: ProductQuery
    ) {
    }

    ngOnInit(): void {
        const routeParams = this.route.snapshot.paramMap;
        const productIdFromRoute = Number(routeParams.get('productId'));
        this.productSub = this.productQuery.products$.subscribe(
            products => {
                this.product = products.find((product) => product.id == productIdFromRoute);
            }
        );
    }

    ngOnDestroy(): void {
        this.productSub.unsubscribe();
    }

    addToCart(product: Product) {
        this.cartService.addToCart(product);
        console.log('Product ' + product.name + ' has been added to your cart!');
    }
}
