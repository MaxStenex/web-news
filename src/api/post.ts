import { instance } from ".";

export const getCategories = async () => {
  const res = await instance.get("/posts/categories");
  return res.data;
};

export interface ICreatePostFormData {
  title: string;
  text: string;
  category: string;
}

export const createPost = async (formData: ICreatePostFormData) => {
  const res = await instance.post("/posts/create", formData);
  return res.data;
};

export interface IGetPosts {
  take?: number;
  skip?: number;
}

export const getPosts = async ({ take, skip }: IGetPosts) => {
  let url = "/posts";

  if (take) {
    url += `?take=${take}`;
  }

  if (skip) {
    url += `${take ? "&" : "?"}skip=${skip}`;
  }

  const res = await instance.get(url);
  return res.data;
};

export const getPostById = async (id: number) => {
  const res = await instance.get(`/posts/${id}`);
  return res.data;
};

interface ILeaveCommentOnPost {
  postId: number;
  text: string;
}

export const leaveCommentOnPost = async ({ postId, text }: ILeaveCommentOnPost) => {
  const res = await instance.post(`/comment/${postId}`, { text });
  return res.data;
};
