import {
  CanActivate,
  ExecutionContext,
  Injectable,
  SetMetadata,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { SignUserDto } from './dto/update-user.dto';

export const IS_PUBLIC_KEY = 'isPublic';
export const UsePublic = () => SetMetadata(IS_PUBLIC_KEY, true);

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService,
    private readonly authService: AuthService,
  ) {}

  async canActivate(
    context: ExecutionContext,
    // @ts-ignore
  ): boolean | Promise<boolean> | Observable<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException('احراز هویت نشده');
    }
    try {
      const userVerified = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET,
      });

      const user: SignUserDto = await this.authService.findOne({
        username: userVerified.username,
      });

      if (!user) {
        throw new NotFoundException('کاربری با این مشخصات وجود ندارد');
      }

      request['user'] = userVerified;
    } catch {
      throw new UnauthorizedException('احراز هویت نشده');
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    // @ts-ignore
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
