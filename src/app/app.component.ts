import {Component, OnInit} from '@angular/core';
import {ProductService} from "./state/product/product.service";
import {ShippingService} from "./state/shipping/shipping.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private productService: ProductService, private shippingService: ShippingService) {
    }

    ngOnInit() {
        this.productService.fetchProducts();
        this.shippingService.fetchShippingCosts();
    }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/