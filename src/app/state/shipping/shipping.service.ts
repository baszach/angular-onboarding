import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ShippingStore} from "./shipping.store";
import {Shipping} from "./shipping.model";

@Injectable({
    providedIn: 'root'
})
export class ShippingService {
    constructor(private productStore: ShippingStore, private http: HttpClient) {
    }

    fetchShippingCosts(): void {
        this.http.get<Shipping[]>(
            environment.appUrl + '/api/shipping'
        ).subscribe(shipping => {
            this.productStore.update({shipping: shipping});
        });
    }
}
