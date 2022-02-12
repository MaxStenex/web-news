import { useQuery } from "react-query";
import { getCategories, getLatestPosts } from "../api/post";

export const useCategoriesQuery = () => useQuery("postCategories", getCategories);

export const useLatestPostsQuery = () => useQuery("latestPosts", getLatestPosts);
