import { MaxLength, MinLength } from "class-validator";

export class CreateCommentDto {
  @MinLength(2)
  @MaxLength(100)
  text: string;
}
