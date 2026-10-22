import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const userRole = request.headers['x-role'];
    if (userRole !== 'author') {
      throw new ForbiddenException('Chỉ có tác giả mới có quyền sửa');
    }
    return true;
  }
}
