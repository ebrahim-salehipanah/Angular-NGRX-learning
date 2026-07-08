import { ApplicationConfig, provideBrowserGlobalErrorListeners, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './counter/counter.reducer';
import { collectionReducer } from './book/collection.reducer';
import { booksReducer } from './book/books.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore({
        count: counterReducer,
        books: booksReducer,
        collection: collectionReducer,
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};
