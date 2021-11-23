import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Admin } from 'src/admin/admin.schema';
import { AuthService } from './auth.service';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtAuthGuard } from './guards/jwt.guard';

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get("login")
  async login(@Body() admin: Admin): Promise<Observable<Object>> {
    return (await this.authService.login(admin)).pipe(
      map( (jwt: string) => {
        return {
          token: jwt
        }
      }
      )
    );
  }

  @Post("add")
  addAdmin(@Body() admin_req: Admin){
    return this.authService.addAdmin(admin_req);
  }


  @UseGuards(JwtAuthGuard)
  @Get("test")
  getAdmins(){
    return this.authService.test();
  }
}
