import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { validate } from "class-validator";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(userDto: CreateUserDto): Promise<User | HttpException> {
    try {
      const user = this.usersRepository.create(userDto);
      const errors = await validate(user);

      if (errors.length > 0) {
        return new HttpException("Validation failed", HttpStatus.BAD_REQUEST);
      }

      const savedUser = await this.usersRepository.save(user);
      delete savedUser.password;

      return savedUser;
    } catch (error) {
      if (error.code === "ER_DUP_ENTRY") {
        return new HttpException("Email already exists", HttpStatus.CONFLICT);
      }
    }
  }
}
