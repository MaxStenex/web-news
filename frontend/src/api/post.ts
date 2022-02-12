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

export const getLatestPosts = async () => {
  const res = await instance.get("/posts/latest");
  return res.data;
};
