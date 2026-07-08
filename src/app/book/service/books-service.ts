import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Observable, map, of } from 'rxjs';
import { Book } from '../model/book';

const fakeBooks: Book[] = [
    {
        id: "1",
        volumeInfo: {
            title: "The Midnight Library",
            authors: ["Matt Haig"]
        }
    },
    {
        id: "2",
        volumeInfo: {
            title: "Project Hail Mary",
            authors: ["Andy Weir"]
        }
    },
    {
        id: "3",
        volumeInfo: {
            title: "The Seven Husbands of Evelyn Hugo",
            authors: ["Taylor Jenkins Reid"]
        }
    },
    {
        id: "4",
        volumeInfo: {
            title: "Atomic Habits",
            authors: ["James Clear"]
        }
    },
    {
        id: "5",
        volumeInfo: {
            title: "Dune",
            authors: ["Frank Herbert"]
        }
    },
]

@Injectable({ providedIn: 'root' })
export class GoogleBooksService {
    private readonly http = inject(HttpClient);

    getBooks(): Observable<Array<Book>> {
        return of<Book[]>(fakeBooks)
    }
}