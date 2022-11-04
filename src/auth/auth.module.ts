import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserRepository } from './repository/user.repository';
import { UserService } from './user.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './security/passport.jwt.strategy';
import { UserAuthorityRepository } from './repository/user-authority.repository';
@Module({
  imports: [TypeOrmModule.forFeature([UserRepository,UserAuthorityRepository]),
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
