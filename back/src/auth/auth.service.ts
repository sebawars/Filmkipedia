import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { PasswordEncoderService } from './password-encoder.service';
import { User } from '../user/user.entity';

@Injectable()
export class AuthService {
  
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
    private passwordEncoderService: PasswordEncoderService
    ) {}
    

  async validateUser(username: string, pass: string): Promise<User> {
    const user = await this.userService.findByUsername(username);
    
    if (
      user &&
      user.enabled &&
      this.passwordEncoderService.check(pass, user.password)
    ) {
      delete user.password;
      return user;
    }
    return null;
  }

  async login(user: User): Promise<any> {
    const payload = { username: user.username, pass: user.password };
    const tokenData = {};
    tokenData['access_token'] = this.jwtService.sign(payload);
    return tokenData;
  }

}
