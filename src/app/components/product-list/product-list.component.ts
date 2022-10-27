import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ProductQuery} from "../../state/product/product.query";
import {Product} from "../../state/product/product.model";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

    products$!: Observable<Product[]>

    constructor(private productQuery: ProductQuery) {
    }

    ngOnInit(): void {
        this.products$ = this.productQuery.products$
    }

    share() {
        window.alert('The product has been shared!');
    }

    onNotify() {
        window.alert('You will be notified when the product goes on sale!');
    }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
