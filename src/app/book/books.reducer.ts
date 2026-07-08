import { createReducer, on } from '@ngrx/store';

import { BooksApiActions } from './books.actions';
import { Book } from './model/book';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
    initialState,
    on(BooksApiActions.retrievedBookList, (_state, { books }) => {
        console.log({ _state, books })
        return books;
    })
);