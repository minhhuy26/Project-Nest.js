import { Injectable, NestMiddleware } from '@nestjs/common';
import type { Request, Response, NextFunction } from 'express';

export interface RequestWithAuthor extends Request {
  author?: string;
}

@Injectable()
export class AuthorMiddleware implements NestMiddleware {
  use(req: RequestWithAuthor, res: Response, next: NextFunction) {
    const author = req.headers['x-author'];

    if (typeof author === 'string' && author.trim() !== '') {
      req.author = author.trim();
    }

    next();
  }
}
