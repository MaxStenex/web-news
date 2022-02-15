import React from "react";
import { MainLayout } from "../components/layouts";
import { NewsCards } from "../components/news";
import { CardsContent, PageTop } from "../components/shared";

export const NewsPage: React.FC = () => {
  return (
    <MainLayout>
      <PageTop title="All news" postTitle="Posts created by users" />
      <CardsContent>
        <NewsCards />
      </CardsContent>
    </MainLayout>
  );
};
