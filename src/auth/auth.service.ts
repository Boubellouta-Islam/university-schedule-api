import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { from, Observable } from 'rxjs';
import { Admin } from 'src/admin/admin.schema';

import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectModel('Admin') private readonly adminModel: Model<Admin>,
  ) {}

  generateJwt(admin: Admin): Observable<string> {
    return from(this.jwtService.signAsync({ admin }));
  }

  async comparePasswords(password: string, hash: string){
    const isMatch = await bcrypt.compare(password, hash);
  }

  async login(admin_req: Admin) {
    try {
      const admin = await this.adminModel
        .findOne({ email: admin_req.email })
        .exec();
      if (admin) {
        // compare passwords
        if(this.comparePasswords(admin_req.password, admin.password)){
          return this.generateJwt(admin_req);
        }else{
          throw new HttpException('wrong email or password', HttpStatus.FORBIDDEN);
        }
        // return jwt
      } else {
        throw new HttpException('not found', HttpStatus.NOT_FOUND);
      }
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async addAdmin(admin_req: Admin){
    try {
      const admin = await this.adminModel
        .create(admin_req);

      return admin;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async test() {
    const admins = await this.adminModel.find().exec();
    return admins;
  }
}
