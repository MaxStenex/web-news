import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findUserByField({
    field,
    value,
    withPassword = false,
  }: {
    field: keyof User;
    value: string | number;
    withPassword?: boolean;
  }): Promise<User | null> {
    try {
      const user = await this.userRepository.findOne({
        where: { [field]: value },
      });

      if (!withPassword) {
        delete user.password;
      }

      return user;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
