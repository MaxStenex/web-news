import React from "react";
import { PostForm } from ".";

export const PostContent: React.FC = () => {
  return (
    <div className="post-content">
      <h3 className="post-content__title">Hello world!</h3>
      <div className="post-content__main-text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis id provident
        asperiores sint magnam distinctio, corrupti ducimus doloremque, repellendus rerum
        illum, veritatis dicta exercitationem voluptatibus. Saepe doloremque eveniet eius
        a?
      </div>
      <PostForm />
    </div>
  );
};
