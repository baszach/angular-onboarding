import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartQuery} from "../../state/cart/cart.query";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html'
})
export class TopBarComponent implements OnInit, OnDestroy {
    itemCount: number = 0;
    private countSub = Subscription.EMPTY;

    constructor(private cartQuery: CartQuery) {
    }

    ngOnInit() {
        this.countSub = this.cartQuery.cartItems$
            .subscribe(cart => {
                this.itemCount = cart.length;
            });
    }

    ngOnDestroy() {
        this.countSub.unsubscribe();
    }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/