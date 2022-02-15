import React from "react";
import { useLatestPostsQuery } from "../../queries/post";
import { Card } from "../shared/CardsContent/Card";

export const NewsCards: React.FC = () => {
  const { data } = useLatestPostsQuery();

  return (
    <div className="news-cards">
      <div className="news-cards__cards-wrapper">
        {data?.map((c: any) => (
          <div key={c.id} className="news-cards__card">
            <Card
              id={c.id}
              createdAt={c.createdAt}
              text={c.text}
              title={c.title}
              creator={c.creator.username}
              category={c.category}
            />
          </div>
        ))}
      </div>
      <div className="news-cards__pagination-btns">
        <button className="default-btn">{"<"}</button>

        <button className="primary-btn">1</button>
        <button className="default-btn">2</button>

        <button className="default-btn">{">"}</button>
      </div>
    </div>
  );
};
