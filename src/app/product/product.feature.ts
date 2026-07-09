import { createFeature, createReducer, createSelector, on } from "@ngrx/store"
import { ProductActions } from "./product.action"

export interface Product {
    id: number,
    name: string,
}

export interface State {
    products: Product[],
    loading: boolean,
}

export const initialValue: State = {
    products: [],
    loading: false
}

export const productFeature = createFeature({
    name: 'products',
    reducer: createReducer(
        initialValue,
        on(
            ProductActions.fetchProduct, (state) => {
                return {
                    ...state,
                    loading: true
                }
            }
        ),
        on(
            ProductActions.resolveProduct, (state) => {
                return {
                    ...state,
                    loading: false
                }
            }
        ),
    ),
    extraSelectors: ({ selectProducts, selectLoading }) => ({
        productCount: createSelector(
            selectProducts,
            selectLoading,
            (products, loading) =>
                loading ? 0 : products.length
        ),
    })
})

export const {
    name,
    reducer,
    selectLoading,
    selectProducts,
    selectProductsState,
} = productFeature