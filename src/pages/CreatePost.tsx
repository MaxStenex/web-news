import React from "react";
import { CreatePostContent } from "../components/create-post";
import { MainLayout } from "../components/layouts";

export const CreatePostPage: React.FC = () => {
  return (
    <MainLayout>
      <CreatePostContent />
    </MainLayout>
  );
};
