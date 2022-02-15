import React from "react";
import { useLatestPostsQuery } from "../../queries/post";
import { Card } from "../shared/CardsContent/Card";

export const LatestCards: React.FC = () => {
  const { data } = useLatestPostsQuery();

  if (!data) return null;

  return data?.map((c: any) => (
    <Card
      id={c.id}
      key={c.id}
      createdAt={c.createdAt}
      text={c.text}
      title={c.title}
      creator={c.creator.username}
      category={c.category}
    />
  ));
};
