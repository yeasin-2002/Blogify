import { useAxios } from "@/hooks";
import { FavoriteBlogsResponse } from "@/types";
import { useQuery } from "@tanstack/react-query";
import React from "react";
interface Props extends React.ComponentProps<"div"> {}

export const FavoriteBlogs = ({ ...rest }: Props) => {
  const api = useAxios();

  const { data } = useQuery({
    queryKey: ["favourites"],
    queryFn: async () => api.get<FavoriteBlogsResponse>("/blogs/favourites"),
  });

  return (
    <div className="sidebar-card" {...rest}>
      <h3 className="text-xl font-semibold text-slate-300 lg:text-2xl">
        Your Favorite ❤️
      </h3>

      <ul className="my-5 space-y-5">
        {data?.data.blogs?.map((blog) => (
          <li key={blog.id}>
            <h3 className="cursor-pointer font-medium text-slate-400 transition-all hover:text-slate-300">
              {blog.title}
            </h3>
            <p className="text-sm text-slate-600">
              {blog.tags.split(",").map((tag) => (
                <span key={tag} className="mr-1 text-slate-400">
                  #{tag}
                </span>
              ))}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
