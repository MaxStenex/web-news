import { useQuery } from "react-query";
import { getCategories } from "../api/post";

export const useCategoriesQuery = () => useQuery("postCategories", getCategories);
