import { Controller, Post, UseGuards, Request, HttpCode, Body, Logger} from '@nestjs/common';
import { ApiBasicAuth, ApiOkResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { UserDto } from '../user/dto/user.dto';
import { User } from 'src/user/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  @ApiBasicAuth()
  @ApiOkResponse({ description: 'Token generated.'})
  @ApiUnauthorizedResponse({ description: 'Wrong credentials.'})
  @HttpCode(200)
  login(@Body() userDto: UserDto): Promise<any> {

    return this.authService.login(userDto.toUser());
  }

}
