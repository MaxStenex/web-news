import { MaxLength, MinLength } from "class-validator";
import { Post } from "src/post/post.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("comments")
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @MinLength(2)
  @MaxLength(100)
  @Column({ nullable: false })
  text: string;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: string;

  @ManyToOne(() => Post, (post) => post.comments)
  post: Post;
}
