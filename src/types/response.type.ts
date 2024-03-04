import { Blog } from './utils.type';

export type homeBlogResponse = {
  total: number;
  page: number;
  limit: number;
  blogs: Blog[];
};

export type profileResponse = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
  bio: string;
  favourites: { id: string; title: string; tags: string }[];
  blogs: Blog[];
};
