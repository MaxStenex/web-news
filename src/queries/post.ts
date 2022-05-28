import { useQuery } from "react-query";
import { getCategories, getPostById, getPosts, IGetPosts } from "../api/post";

export const useCategoriesQuery = () => useQuery("postCategories", getCategories);

export const useLatestPostsQuery = () => {
  return useQuery("latestPosts", () => getPosts({ take: 5 }));
};

export const usePostsQuery = ({ take, skip }: IGetPosts) => {
  return useQuery(["posts", { take, skip }], () => getPosts({ take, skip }), {
    keepPreviousData: true,
  });
};

export const usePostQuery = (postId: number) => {
  return useQuery(["post", postId], () => getPostById(postId));
};
