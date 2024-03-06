import { PopularBlogsResponse } from "@/types";
import { axiosInstance } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { PopularBlogItems } from "./PopularBlogItems";
interface Props extends React.ComponentProps<"div"> {}

export const MostPopularBlogs = ({ ...rest }: Props) => {
  const { data } = useQuery({
    queryKey: ["mostPopularBlogs"],
    queryFn: async () =>
      axiosInstance.get<PopularBlogsResponse>("/blogs/popular"),
  });

  return (
    <div className="sidebar-card" {...rest}>
      <h3 className="text-xl font-semibold text-slate-300 lg:text-2xl">
        Most Popular 👍️
      </h3>

      <ul className="my-5 space-y-5">
        {data?.data?.blogs?.map((blog) => (
          <PopularBlogItems key={blog.id} data={blog} />
        ))}
      </ul>
    </div>
  );
};
