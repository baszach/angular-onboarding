import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {TopBarComponent} from './components/top-bar/top-bar.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductAlertsComponent} from './components/product-alerts/product-alerts.component';
import {ProductDetailsComponent} from './components/product-details/product-details.component';
import {CartComponent} from './components/cart/cart.component';
import {ShippingComponent} from './components/shipping/shipping.component';
import {ProductService} from "./state/product/product.service";
import {ProductStore} from "./state/product/product.store";
import {ProductQuery} from "./state/product/product.query";
import {LifecycleComponent} from "./components/lifecycle-component/lifecycle.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            {path: '', component: ProductListComponent},
            {path: 'products/:productId', component: ProductDetailsComponent},
            {path: 'cart', component: CartComponent},
            {path: 'shipping', component: ShippingComponent},
            {path: 'lifecycle', component: LifecycleComponent},
        ]),
    ],
    declarations: [
        AppComponent,
        TopBarComponent,
        ProductListComponent,
        ProductAlertsComponent,
        ProductDetailsComponent,
        CartComponent,
        ShippingComponent,
        LifecycleComponent
    ],
    providers: [
        ProductService,
        ProductStore,
        ProductQuery
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
