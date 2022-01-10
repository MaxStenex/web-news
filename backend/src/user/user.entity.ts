import { IsEmail, MaxLength, MinLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @MinLength(2)
  @MaxLength(100)
  @Column({ nullable: false })
  username: string;

  @IsEmail()
  @Column({ nullable: false, unique: true })
  email: string;

  @MinLength(6)
  @MaxLength(255)
  @Column()
  password: string;
}
