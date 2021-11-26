import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { variables } from 'src/config/environment';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: variables.jwt_secret,
    });
  }

  async validate(payload: any) {
    if(!payload.adminId || !this.authService.hasAccess(payload.adminId)){
      throw new UnauthorizedException();
    }
    return { ...payload };
  }
}