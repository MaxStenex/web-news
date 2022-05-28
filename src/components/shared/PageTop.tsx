import React from "react";

type Props = {
  title: string;
  postTitle: string;
};

export const PageTop: React.FC<Props> = ({ postTitle, title }) => {
  return (
    <div className="page-top">
      <div className="page-top__wrapper">
        <h2 className="page-top__title">{title}</h2>
        <h3 className="page-top__post-title">{postTitle}</h3>
      </div>
    </div>
  );
};
