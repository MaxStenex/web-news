import { HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { validate } from "class-validator";
import { UserService } from "src/user/user.service";
import { Repository } from "typeorm";
import { CreatePostDto } from "./dto/create-post.dto";
import { Post, PostCategory } from "./post.entity";

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private readonly postRepository: Repository<Post>,
    private userService: UserService,
  ) {}

  async createNewPost(createPostDto: CreatePostDto, userId: number) {
    try {
      await validate(createPostDto);

      const creator = await this.userService.findUserByField({
        field: "id",
        value: userId,
      });

      if (!userId || !creator) {
        return new HttpException("User not found", 400);
      }

      const post = this.postRepository.create({
        ...createPostDto,
        creator,
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
}
