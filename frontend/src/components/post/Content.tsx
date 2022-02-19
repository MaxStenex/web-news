import React from "react";
import { useParams } from "react-router-dom";
import { PostComments, PostForm } from ".";
import { usePostQuery } from "../../queries/post";
import { CommentType } from "./Comments";

export const PostContent: React.FC = () => {
  const params = useParams();
  const postId = parseInt(params.id || "");

  const { data, isLoading } = usePostQuery(postId);

  if (isLoading) {
    return null;
  }

  const comments: CommentType[] = data.comments.map((c: any) => ({
    id: c.id,
    text: c.text,
    creator: c.creator.username,
  }));

  return (
    <div className="post-content">
      <h3 className="post-content__title">{data.title}</h3>
      <div className="post-content__main-text">{data.text}</div>
      <PostForm postId={postId} />
      <PostComments data={comments} />
    </div>
  );
};
