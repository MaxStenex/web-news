import { Body, Controller, HttpException, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./user.entity";
import { UserService } from "./user.service";

@Controller("users")
export class UserController {
  constructor(private userService: UserService) {}

  @Post("/register")
  async register(
    @Body() createUserDto: CreateUserDto,
  ): Promise<User | HttpException> {
    return this.userService.create(createUserDto);
  }
}
