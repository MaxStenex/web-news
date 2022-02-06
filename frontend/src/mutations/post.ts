import { useMutation } from "react-query";
import { createPost } from "../api/post";

export const useCreatePostMutation = () => useMutation(createPost);
