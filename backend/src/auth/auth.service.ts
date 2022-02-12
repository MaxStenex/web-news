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
import { JwtPayloadDto } from "./dto/jwt-payload.dto";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  generateAccessToken(user: User): string {
    const jwtPayload: JwtPayloadDto = { email: user.email, sub: user.id };

    return this.jwtService.sign(jwtPayload);
  }

  async register(
    registerUserDto: RegisterUserDto,
  ): Promise<(User & { access_token: string }) | HttpException> {
    try {
      await validate(registerUserDto);

      const hash = await bcrypt.hash(registerUserDto.password, 5);

      const user = this.userRepository.create({
        ...registerUserDto,
        password: hash,
      });

      const savedUser = await this.userRepository.save(user);
      delete savedUser.password;

      return { ...savedUser, access_token: this.generateAccessToken(user) };
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

      const user = await this.userRepository.findOne({
        where: { email },
        select: ["password", "email"],
      });

      console.log(user);

      if (!user) {
        return new UnauthorizedException();
      }

      const hashedPassword = user.password;
      const isMatch = await bcrypt.compare(password, hashedPassword);

      if (!isMatch) {
        return new UnauthorizedException();
      }

      delete user.password;

      return { ...user, access_token: this.generateAccessToken(user) };
    } catch (error) {
      return new UnauthorizedException();
    }
  }
}
