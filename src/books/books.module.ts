import { Module } from '@nestjs/common';
import { BooksService } from './books.service.js';
import { BooksController } from './books.controller.js';
import { AuthGuard } from './author.gaurd.js';

@Module({
  controllers: [BooksController],
  providers: [BooksService, AuthGuard],
})
export class BooksModule {}
