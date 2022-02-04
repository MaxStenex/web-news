import { IsEnum, MaxLength, MinLength } from "class-validator";
import { User } from "src/user/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export enum PostCategory {
  JavaScript = "javascript",
  Python = "python",
  Technologies = "technologies",
  Software = "software",
}

@Entity("post")
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @MinLength(2)
  @MaxLength(100)
  @Column()
  title: string;

  @MinLength(20)
  @MaxLength(150)
  @Column()
  text: string;

  @IsEnum(PostCategory)
  @Column({
    type: "enum",
    enum: PostCategory,
    nullable: false,
  })
  category: PostCategory;

  @ManyToOne(() => User, (user) => user.posts)
  creator: User;
}
