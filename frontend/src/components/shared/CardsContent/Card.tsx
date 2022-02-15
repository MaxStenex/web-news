import React from "react";
import { Link } from "react-router-dom";
import { userSvg, calendarSvg } from "../../../assets";
import dayjs from "dayjs";

type Props = {
  createdAt: string;
  creator: string;
  id: number;
  title: string;
  text: string;
  category: string;
};

export const Card: React.FC<Props> = ({
  createdAt,
  creator,
  id,
  title,
  category,
  text,
}) => {
  return (
    <div className="post-card">
      <div className="post-card__header">
        <div className="post-card__header-item">
          <img src={userSvg} alt="" />
          <span>{creator}</span>
        </div>
        <div className="post-card__header-item">
          <img src={calendarSvg} alt="" />
          <span>{dayjs(createdAt).format("MMMM DD, YYYY")}</span>
        </div>
      </div>
      <div className="post-card__main">
        <h3 className="post-card__title">{title}</h3>
        <div className="post-card__category">Category : {category}</div>
        <div className="post-card__text">{text}</div>
        <Link to={`/posts/${id}`} className="primary-btn post-card__read-more-btn">
          Read more
        </Link>
      </div>
    </div>
  );
};
