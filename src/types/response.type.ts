import { Blog } from './utils.type';

export type homeBlogResponse = {
  total: number;
  page: number;
  limit: number;
  blogs: Blog[];
};
