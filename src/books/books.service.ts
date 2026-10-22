import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto.js';
import { Book } from './entities/book.entity.js';

@Injectable()
export class BooksService {
  private books: Book[] = [];
  private nextId = 1;

  create(dto: CreateBookDto): Book {
    const book: Book = { id: this.nextId++, ...dto };
    this.books.push(book);
    return book;
  }

  findAll(): Book[] {
    return this.books;
  }

  findOne(id: number): Book {
    const book = this.books.find((item) => item.id === id);
    if (!book) throw new NotFoundException(`Not found id :${id}`);
    return book;
  }

  update(id: number, dto: CreateBookDto): Book {
    const book = this.findOne(id);
    Object.assign(book, dto, { id: book.id, author: book.author });
    return book;
  }

  remove(id: number): void {
    this.findOne(id);
    this.books = this.books.filter((item) => item.id !== id);
  }
}
