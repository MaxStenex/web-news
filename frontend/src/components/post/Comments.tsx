import React from "react";

export type CommentType = {
  id: number;
  text: string;
  creator: string;
};

type Props = {
  data: CommentType[];
};

export const PostComments: React.FC<Props> = ({ data }) => {
  return (
    <div className="post-comments">
      {data.map((c) => (
        <div key={c.id} className="post-comments__comment post-comment">
          <div className="post-comment__title">{c.creator}</div>
          <div className="post-comment__text">{c.text}</div>
        </div>
      ))}
    </div>
  );
};
