import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/user/user.entity";
import { Repository } from "typeorm";
import { RegisterUserDto } from "./dto/register-user.dto";
import * as bcrypt from "bcrypt";
import { validate } from "class-validator";
import { LoginUserDto } from "./dto/login-user.dto";
import { UserService } from "src/user/user.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async register(
    registerUserDto: RegisterUserDto,
  ): Promise<User | HttpException> {
    try {
      await validate(registerUserDto);

      const hash = await bcrypt.hash(registerUserDto.password, 5);

      const user = this.userRepository.create({
        ...registerUserDto,
        password: hash,
      });

      const savedUser = await this.userRepository.save(user);
      delete savedUser.password;

      return savedUser;
    } catch (error) {
      if (error.code === "ER_DUP_ENTRY") {
        return new HttpException("Email already exists", HttpStatus.CONFLICT);
      }
    }
  }

  async login(
    loginDto: LoginUserDto,
  ): Promise<(User & { access_token: string }) | HttpException> {
    try {
      const { email, password } = loginDto;

      const user = await this.userService.findUserByField({
        field: "email",
        value: email,
        withPassword: true,
      });

      if (!user) {
        return new UnauthorizedException();
      }

      const hashedPassword = user.password;
      const isMatch = await bcrypt.compare(password, hashedPassword);

      if (!isMatch) {
        return new UnauthorizedException();
      }

      delete user.password;

      const jwtPayload = { email, sub: user.id };

      return { ...user, access_token: this.jwtService.sign(jwtPayload) };
    } catch (error) {
      return new UnauthorizedException();
    }
  }
}
