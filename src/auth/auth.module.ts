import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { adminSchema } from 'src/admin/admin.schema';

import { variables } from '../config/environment';
import { AuthController } from './auth.controller';

import { JwtAuthGuard } from './guards/jwt.guard';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: async () => ({
        secret: variables.jwt_secret,
        signOptions: { expiresIn: '3600s' },
      }),
    }),
    MongooseModule.forFeature([{ name: 'Admin', schema: adminSchema }]),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtAuthGuard, JwtStrategy],
})
export class AuthModule {}
