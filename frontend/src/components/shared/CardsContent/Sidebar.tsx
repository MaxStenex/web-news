import React from "react";
import { useCategoriesQuery } from "../../../queries/post";

export const Sidebar: React.FC = () => {
  const { data } = useCategoriesQuery();

  return (
    <div className="cards-content-sidebar">
      <div className="cards-content-sidebar__block">
        <div className="cards-content-sidebar__block-title">Categories</div>
        <div className="cards-content-sidebar__block-main">
          {data
            ?.sort((a: string, b: string) => a.localeCompare(b))
            .map((c: any, i: number) => (
              <div key={`${c} ${i}`} className="cards-content-sidebar__category">
                <span>{c}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
