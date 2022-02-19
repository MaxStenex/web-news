import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
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
  ) {
    return this.commentService.createNewComment({
      ...createCommentDto,
      postId: parseInt(postId),
    });
  }

  @Get("/:postId")
  async findAll(@Param("postId") postId: string) {
    return this.commentService.findPostComments(parseInt(postId));
  }
}
