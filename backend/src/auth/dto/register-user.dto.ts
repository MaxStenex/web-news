import { IsEmail, MaxLength, MinLength } from "class-validator";

export class RegisterUserDto {
  @MinLength(2)
  @MaxLength(100)
  username: string;

  @IsEmail()
  email: string;

  @MinLength(6)
  @MaxLength(255)
  password: string;
}
