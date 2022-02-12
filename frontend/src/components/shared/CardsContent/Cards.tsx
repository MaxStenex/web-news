import React from "react";
import { useLatestPostsQuery } from "../../../queries/post";
import { Card } from "./Card";

export const Cards: React.FC = () => {
  const { data } = useLatestPostsQuery();

  return (
    <div className="cards-content-cards">
      <div className="cards-content-cards__wrapper">
        {data?.map((c: any) => (
          <Card
            id={c.id}
            key={c.id}
            createdAt={c.createdAt}
            text={c.text}
            title={c.title}
            creator={c.creator.username}
            category={c.category}
          />
        ))}
      </div>
    </div>
  );
};
