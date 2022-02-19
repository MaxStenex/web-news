import { HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { validate } from "class-validator";
import { Repository } from "typeorm";
import { Comment } from "./comment.entity";
import { CreateCommentDto } from "./dto/create-comment.dto";

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}

  async createNewComment({
    postId,
    text,
  }: CreateCommentDto & { postId: number }) {
    try {
      const createCommentDto = { text };
      await validate(createCommentDto);

      const comment = this.commentRepository.create({
        post: { id: postId },
        text,
      });

      await this.commentRepository.save(comment);

      return comment;
    } catch (error) {
      return new HttpException("Something goes wrong", 500);
    }
  }

  async findPostComments(postId: number) {
    try {
      const comments = await this.commentRepository.find({
        where: {
          post: {
            id: postId,
          },
        },
        relations: ["post"],
      });

      return comments;
    } catch (error) {
      return new HttpException("Something goes wrong", 500);
    }
  }
}
