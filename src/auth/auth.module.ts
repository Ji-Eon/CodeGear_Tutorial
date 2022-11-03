import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './security/passport.jwt.strategy';
@Module({
  imports: [TypeOrmModule.forFeature([UserRepository]),
  JwtModule.register({
    secret: 'SECRET_KET',
    signOptions:{expiresIn: '300s'},
  }),
  PassportModule.register({defaultStrategy: 'jwt'}),
  ],
  exports: [TypeOrmModule],
  controllers: [AuthController],
  providers: [AuthService, UserService,JwtStrategy]
})
export class AuthModule {}
