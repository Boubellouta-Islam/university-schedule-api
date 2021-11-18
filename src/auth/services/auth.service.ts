import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { from, Observable } from 'rxjs';
import { Admin } from 'src/models/admin.model';

@Injectable()
export class AuthService {

    constructor(
        private readonly jwtService: JwtService,
        @InjectModel('Admin') private readonly adminModel: Model<Admin>
        ){}

    generateJwt(admin: Admin): Observable<string> {
        return from(this.jwtService.signAsync({ admin }));
    }

    async login(admin_req: Admin){
        try {
            const admin = await this.adminModel.find({ email: admin_req.email }).exec();
            if(admin){
                // compare passwords
                // return jwt
            }else{
                throw new HttpException("not found", HttpStatus.NOT_FOUND);
            }
        } catch (error) {
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}