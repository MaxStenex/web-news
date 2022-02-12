import { IsEmail, MaxLength, MinLength } from "class-validator";
import { Post } from "src/post/post.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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
  @Column({ select: false })
  password: string;

  @OneToMany(() => Post, (post) => post.creator)
  posts: Post[];
}
