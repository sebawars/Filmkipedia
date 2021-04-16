import { Controller, Post, Body, Res, HttpCode } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDto } from "./dto/user.dto";
import { ApiCreatedResponse, ApiConflictResponse } from "@nestjs/swagger";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiCreatedResponse({ description: "User created." })
  @ApiConflictResponse({ description: "Username already taken." })
  @HttpCode(201)
  async save(@Body() userDto: UserDto) {
    await this.userService.save(userDto.toUser());
  }
}
