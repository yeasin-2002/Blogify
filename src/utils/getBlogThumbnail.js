import { baseUrl } from "./exportEnv";

export const getBlogThumbnail = (thumbnail) =>
  `${baseUrl}/uploads/blog/${thumbnail}`;
