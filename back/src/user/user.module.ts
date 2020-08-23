import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { PasswordEncoderService } from '../auth/password-encoder.service';
import { UserController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User]), PasswordEncoderService],
  controllers: [UserController],
  providers: [UserService, PasswordEncoderService],
  exports: [UserService]
})
export class UserModule {}
