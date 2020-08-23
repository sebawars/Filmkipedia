import { User } from '../user.entity';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Exclude } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {

  @IsEmail()
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  @Exclude({ toPlainOnly: true })
  password: string;

  toUser(): User {
    const user: User = new User();
    user.username = this.username;
    user.password = this.password;
    return user;
  }
}

