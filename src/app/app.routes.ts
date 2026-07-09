import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';
import { productFeature } from './product/product.feature';

export const routes: Routes = [
    {
        path: 'products',
        loadComponent: () => import('./product/product-list.component').then(c => c.ProductListComponent),
        providers: [provideState(productFeature)],
    },

];
