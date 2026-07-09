import { Component, ChangeDetectionStrategy } from "@angular/core";
import { provideState, provideStore } from "@ngrx/store";
import { productFeature } from "./product.feature";

@Component({
    selector: 'app-product-list',
    template: `
    product list works!
    `,
    changeDetection: ChangeDetectionStrategy.Eager,
    providers: [
    ]
})
export class ProductListComponent {

}