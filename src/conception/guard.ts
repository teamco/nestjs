import { Injectable, ExecutionContext, CanActivate } from "@nestjs/common";

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    console.log('Guard...');
    const request = context.switchToHttp().getRequest();
    // return request.isAuthenticated();

    return request.headers.authorization === 'token';
  }
}