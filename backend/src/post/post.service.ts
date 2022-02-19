import { HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { validate } from "class-validator";
import { Repository } from "typeorm";
import { CreatePostDto } from "./dto/create-post.dto";
import { Post, PostCategory } from "./post.entity";

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private readonly postRepository: Repository<Post>,
  ) {}

  async createNewPost(createPostDto: CreatePostDto, userId: number) {
    try {
      await validate(createPostDto);

      if (!userId) {
        return new HttpException("User not found", 400);
      }

      const post = this.postRepository.create({
        ...createPostDto,
        creator: {
          id: userId,
        },
      });

      await this.postRepository.save(post);

      return post;
    } catch (error) {
      return new HttpException("Something goes wrong", 500);
    }
  }

  async findAllCategories() {
    try {
      return Object.values(PostCategory);
    } catch (error) {
      return new HttpException("Something goes wrong", 500);
    }
  }

  async find({ take, skip }: { take?: number; skip?: number }) {
    try {
      const [posts, totalCount] = await this.postRepository.findAndCount({
        relations: ["creator"],
        order: {
          createdAt: "DESC",
        },
        take: take,
        skip: skip,
      });

      return { posts, totalCount };
    } catch (error) {}
  }

  async findById(id: number) {
    try {
      const post = await this.postRepository.findOne({
        relations: ["creator", "comments", "comments.creator"],
        where: { id },
      });

      return post;
    } catch (error) {}
  }
}
