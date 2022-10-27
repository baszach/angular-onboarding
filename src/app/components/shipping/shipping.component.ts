import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ShippingQuery} from "../../state/shipping/shipping.query";
import {Shipping} from "../../state/shipping/shipping.model";

@Component({
    selector: 'app-shipping',
    templateUrl: './shipping.component.html'
})
export class ShippingComponent implements OnInit {
    shippingCosts$!: Observable<Shipping[]>;

    constructor(private shippingQuery: ShippingQuery) {
    }

    ngOnInit(): void {
        this.shippingCosts$ = this.shippingQuery.shippingCosts$
    }
}
