import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { GoogleBooksService } from './service/books-service';
import { BooksApiActions } from './books.actions';

@Injectable()
export class BooksEffects {
    private actions$ = inject(Actions);
    private bookService = inject(GoogleBooksService);

    loadBooks$ = createEffect(() => {
        return this.actions$.pipe(
            ofType('[Books Page] Load Books'),
            exhaustMap(() =>
                this.bookService.getBooks().pipe(
                    // map((books) => ({
                    //     type: '[Books API] Retrieved Book List',
                    //     payload: books,
                    // })),
                    map((books) => BooksApiActions.retrievedBookList({ books })),
                    catchError(() => EMPTY)
                )
            )
        );
    });
}