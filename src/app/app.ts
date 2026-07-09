import { Component, inject, signal } from '@angular/core';
import { CounterComponent } from "./counter/counter.component";
import { BookCollection } from "./book/component/book-collection.component";
import { BooksActions, BooksApiActions } from './book/books.actions';
import { GoogleBooksService } from './book/service/books-service';
import { Store } from '@ngrx/store';
import { selectBookCollection, selectBooks } from './book/books.selectors';
import { BookList } from './book/component/book-list.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [CounterComponent, BookList, BookCollection, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly booksService = inject(GoogleBooksService);
  private readonly store = inject(Store);

  protected books = this.store.selectSignal(selectBooks);
  protected bookCollection = this.store.selectSignal(selectBookCollection);

  protected onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  protected onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }

  ngOnInit() {
    this.store.dispatch({ type: '[Books Page] Load Books' });    // this.booksService
    //   .getBooks()
    //   .subscribe((books) =>
    //     this.store.dispatch(BooksApiActions.retrievedBookList({ books }))
    //   );
  }
}
