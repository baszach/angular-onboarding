import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../state/product/product.model';

@Component({
    selector: 'app-product-alerts',
    templateUrl: './product-alerts.component.html'
})
export class ProductAlertsComponent implements OnInit {
    @Input() product: Product | undefined;
    @Output() notify = new EventEmitter();

    constructor() {
    }

    ngOnInit(): void {
    }
}
