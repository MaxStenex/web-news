import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { RequestUserInfoType } from "src/auth/jwt.strategy";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostService } from "./post.service";

@Controller("posts")
export class PostController {
  constructor(private postService: PostService) {}

  @UseGuards(JwtAuthGuard)
  @Post("/create")
  async createPost(@Body() createPostDto: CreatePostDto, @Request() req) {
    const userId = (req.user as RequestUserInfoType).id;

    return this.postService.createNewPost(createPostDto, userId);
  }

  @Get("/categories")
  async findAllCategories() {
    return this.postService.findAllCategories();
  }
}
