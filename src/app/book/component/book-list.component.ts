import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../model/book';


@Component({
  selector: 'app-book-list',
  template: `
    <div class="book-grid">
      @for (book of books; track book) {
        <div class="book-item">
          <div class="book-content">
            <h3 class="book-title">{{ book.volumeInfo.title }}</h3>
            <p class="book-author">by {{ book.volumeInfo.authors }}</p>
          </div>
          <button class="add-btn" (click)="add.emit(book.id)">
            <span class="btn-icon">+</span> Add to Collection
          </button>
        </div>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: [`
    .book-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .book-item {
      background: linear-gradient(145deg, #ffffff, #f0f0f0);
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.1);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border: 1px solid rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(10px);
      min-height: 180px;
    }

    .book-item:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
      border-color: #4a90e2;
    }

    .book-content {
      flex: 1;
      margin-bottom: 15px;
    }

    .book-title {
      font-size: 1.1rem;
      font-weight: 600;
      color: #2c3e50;
      margin: 0 0 8px 0;
      line-height: 1.4;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .book-author {
      font-size: 0.95rem;
      color: #7f8c8d;
      margin: 0;
      font-style: italic;
      font-weight: 400;
    }

    .add-btn {
      background: linear-gradient(135deg, #4a90e2, #357abd);
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 8px;
      font-size: 0.95rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      width: 100%;
    }

    .add-btn:hover {
      background: linear-gradient(135deg, #357abd, #2a6cb8);
      transform: scale(1.02);
      box-shadow: 0 4px 12px rgba(74, 144, 226, 0.4);
    }

    .add-btn:active {
      transform: scale(0.98);
    }

    .btn-icon {
      font-size: 1.2rem;
      font-weight: 700;
      line-height: 1;
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .book-grid {
        grid-template-columns: 1fr;
        gap: 15px;
        padding: 15px;
      }

      .book-item {
        min-height: 150px;
        padding: 16px;
      }

      .book-title {
        font-size: 1rem;
      }
    }

    @media (min-width: 769px) and (max-width: 1024px) {
      .book-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    /* Empty state styling */
    .book-grid:empty::after {
      content: 'No books available';
      display: block;
      text-align: center;
      padding: 40px;
      color: #95a5a6;
      font-size: 1.1rem;
      grid-column: 1 / -1;
    }
  `]
})
export class BookList {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() add = new EventEmitter<string>();
}