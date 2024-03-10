export type User = {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
};

export type Comment = {
  id: string;
  content: string;
  author: User;
};

export type Blog = {
  id: string;
  title: string;
  content: string;
  thumbnail: string;
  author: User;
  likes: { id: string }[];
  createdAt: string;
  tags?: string;
  comments?: Comment[];
};

export interface FormValueForNewBlog {
  title: string;
  content: string;
  tags: string;
  thumbnail: File | string;
}

export interface DefaultFormValueForNewBlog {
  title: string | undefined;
  content: string | undefined;
  tags: string | undefined;
  thumbnail: File | string;
}
