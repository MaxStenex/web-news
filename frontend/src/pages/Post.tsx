import React from "react";
import { MainLayout } from "../components/layouts";
import { PostContent } from "../components/post";

export const PostPage: React.FC = () => {
  return (
    <MainLayout>
      <PostContent />
    </MainLayout>
  );
};
