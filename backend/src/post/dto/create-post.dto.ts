import { IsEnum, MaxLength, MinLength } from "class-validator";
import { PostCategory } from "../post.entity";

export class CreatePostDto {
  @MinLength(2)
  @MaxLength(100)
  title: string;

  @MinLength(20)
  @MaxLength(150)
  text: string;

  @IsEnum(PostCategory)
  category: PostCategory;
}
