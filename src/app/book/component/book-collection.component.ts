import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-book-collection',
  template: `
    <div class="collection-grid">
      @for (book of books; track book) {
        <div class="book-item">
          <div class="book-content">
            <h3 class="book-title">{{ book.volumeInfo.title }}</h3>
            <p class="book-author">by {{ book.volumeInfo.authors }}</p>
            <span class="book-badge">In Collection</span>
          </div>
          <button class="remove-btn" (click)="remove.emit(book.id)">
            <span class="btn-icon">✕</span> Remove
          </button>
        </div>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: [`
    .collection-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .book-item {
      background: linear-gradient(145deg, #f8f9fa, #e9ecef);
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
      position: relative;
    }

    .book-item:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
      border-color: #dc3545;
      background: linear-gradient(145deg, #ffffff, #f8f9fa);
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
      margin: 0 0 10px 0;
      font-style: italic;
      font-weight: 400;
    }

    .book-badge {
      display: inline-block;
      background: #28a745;
      color: white;
      font-size: 0.7rem;
      font-weight: 600;
      padding: 3px 12px;
      border-radius: 20px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .remove-btn {
      background: linear-gradient(135deg, #dc3545, #c82333);
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

    .remove-btn:hover {
      background: linear-gradient(135deg, #c82333, #bd2130);
      transform: scale(1.02);
      box-shadow: 0 4px 12px rgba(220, 53, 69, 0.4);
    }

    .remove-btn:active {
      transform: scale(0.98);
    }

    .btn-icon {
      font-size: 1.2rem;
      font-weight: 700;
      line-height: 1;
    }

    /* Empty state styling */
    .collection-grid:empty::after {
      content: 'Your collection is empty. Start adding books!';
      display: block;
      text-align: center;
      padding: 60px 40px;
      color: #95a5a6;
      font-size: 1.1rem;
      grid-column: 1 / -1;
      background: #f8f9fa;
      border-radius: 12px;
      border: 2px dashed #dee2e6;
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .collection-grid {
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
      .collection-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `]
})
export class BookCollection implements OnChanges {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() remove = new EventEmitter<string>();

  ngOnChanges(): void {
    console.log(this.books)
  }
}