import { useMutation } from "react-query";
import { createPost, leaveCommentOnPost } from "../api/post";
import { queryClient } from "../App";

export const useCreatePostMutation = () => useMutation(createPost);

export const useCreateCommentMutation = () =>
  useMutation(leaveCommentOnPost, {
    onSuccess: async (_, { postId }) => {
      try {
        queryClient.invalidateQueries(["post", postId]);
      } catch (error) {
        console.log(error);
      }
    },
  });
