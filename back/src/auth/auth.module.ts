import { Module, forwardRef } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { PasswordEncoderService } from './password-encoder.service';
import { AuthService } from './auth.service';
import { LocalStrategy } from './passportStrategies/local.strategy';
import { jwtOptionsFactory } from './jwt.config';
import { JwtStrategy } from './passportStrategies/jwt.strategy';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { UserDto } from '../user/dto/user.dto';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      useFactory: jwtOptionsFactory,
    }),
    forwardRef(() => UserModule)
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    PasswordEncoderService,
    LocalStrategy,
    JwtStrategy,
    JwtAuthGuard,
  ],
  exports: [JwtAuthGuard, PasswordEncoderService],
})
export class AuthModule {}
