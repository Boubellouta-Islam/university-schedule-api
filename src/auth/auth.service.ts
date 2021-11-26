import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { from, Observable } from 'rxjs';
import { Admin } from 'src/admin/admin.schema';

import * as bcrypt from 'bcrypt';
import { variables } from 'src/config/environment';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectModel('Admin') private readonly adminModel: Model<Admin>,
  ) {}

  async generateJwt(admin): Promise<any> {
    const refreshToken = await this.jwtService.signAsync({ adminId: admin._id }, { secret: variables.refresh_secret });
    const accessToken = await this.jwtService.signAsync({ adminId: admin._id }, { secret: variables.jwt_secret, expiresIn: '3600s' });
    return {
      accessToken,
      refreshToken
    }
  }

  async comparePasswords(password: string, hash: string){
    const isMatch = await bcrypt.compare(password, hash);
  }

  async login(admin_req: Admin): Promise<any> {
    try {
      const admin = await this.adminModel
        .findOne({ email: admin_req.email })
        .exec();
      if (admin) {
        if(this.comparePasswords(admin_req.password, admin.password)){
          const { accessToken, refreshToken } = await this.generateJwt(admin);
          admin.refreshToken = refreshToken;
          await admin.save();
          return { accessToken, refreshToken };
        }else{
          throw new HttpException('wrong email or password', HttpStatus.FORBIDDEN);
        }
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


  async hasAccess(adminId): Promise<boolean> {
    const admin = await this.adminModel.findById(adminId);
    if(!admin){
      return false;
    }
    return true;
  }

  async refreshAccessToken(refreshToken: string): Promise<any>{
    try {
      
      const admin = await this.adminModel.findOne({ refreshToken }).exec();

      if(!admin){
        throw new HttpException("invalid refresh token", HttpStatus.BAD_REQUEST);
      }

      return from(this.jwtService.signAsync({ adminId: admin._id }, { secret: variables.jwt_secret, expiresIn: '3600s' }));

    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }

  }
}
