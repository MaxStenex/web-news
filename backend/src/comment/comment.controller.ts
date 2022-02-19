import {
  Body,
  Controller,
  Param,
  Post,
  Request,
  UseGuards,
} from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { RequestUserInfoType } from "src/auth/jwt.strategy";
import { CommentService } from "./comment.service";
import { CreateCommentDto } from "./dto/create-comment.dto";

@Controller("comment")
export class CommentController {
  constructor(private commentService: CommentService) {}

  @UseGuards(JwtAuthGuard)
  @Post("/:postId")
  async createComment(
    @Param("postId") postId: string,
    @Body() createCommentDto: CreateCommentDto,
    @Request() req,
  ) {
    const userId = (req.user as RequestUserInfoType).id;

    return this.commentService.createNewComment(
      createCommentDto,
      parseInt(postId),
      userId,
    );
  }
}
