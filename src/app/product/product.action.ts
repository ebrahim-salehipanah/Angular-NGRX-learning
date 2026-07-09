import { createActionGroup, emptyProps, props } from '@ngrx/store';


export const ProductActions = createActionGroup({
    source: 'Products',
    events: {
        Opened: emptyProps(),
        'Fetch Product': props<{ productId: string }>(),
        'Resolve Product': props<{ productId: string }>(),
        // defining an event with payload using the `props` function
        'Pagination Changed': props<{ page: number; offset: number }>(),
        // defining an event with payload using the props factory
        'Query Changed': (query: string) => ({ query }),
    },
});