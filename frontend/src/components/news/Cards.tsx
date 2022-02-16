import React, { useCallback, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { usePostsQuery } from "../../queries/post";
import { Card } from "../shared/CardsContent/Card";

const POSTS_PER_PAGE = 8;

export const NewsCards: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);

  const currentPage = parseInt(params.get("page") || "");

  const changePage = useCallback(
    (page: number) => {
      if (page === currentPage) {
        return;
      }

      navigate(location.pathname + `?page=${page}`);
    },
    [currentPage, location.pathname, navigate]
  );

  useEffect(() => {
    if (!currentPage) {
      changePage(1);
    }
  }, [changePage, currentPage]);

  const { data } = usePostsQuery({
    take: POSTS_PER_PAGE,
    skip: (currentPage - 1) * POSTS_PER_PAGE,
  });

  const totalPostsCount = data?.totalCount || 0;

  const paginationNumbers = useMemo(() => {
    const totalPages = Math.ceil(totalPostsCount / POSTS_PER_PAGE);

    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }, [totalPostsCount]);

  return (
    <div className="news-cards">
      <div className="news-cards__cards-wrapper">
        {data?.posts?.map((c: any) => (
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
        <button
          disabled={currentPage === 1}
          onClick={() => changePage(currentPage - 1)}
          className="default-btn"
        >
          {"<"}
        </button>

        {paginationNumbers.map((n) => (
          <button
            key={n}
            onClick={() => changePage(n)}
            className={currentPage === n ? "primary-btn" : "default-btn"}
            disabled={currentPage === n}
          >
            {n}
          </button>
        ))}

        <button
          disabled={currentPage === paginationNumbers.length}
          onClick={() => changePage(currentPage + 1)}
          className="default-btn"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};
