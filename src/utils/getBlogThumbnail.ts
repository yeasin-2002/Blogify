import { baseUrl } from "./exportEnv";

export const getBlogThumbnail = (thumbnail: string | undefined) =>
  `${baseUrl}/uploads/blog/${thumbnail}`;
