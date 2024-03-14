import { Cross, ToggleBlogToFavorite, YourFavoriteSkelton } from "@/components";
import { useAxios } from "@/hooks";
import { FavoriteBlogsResponse } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
interface Props extends React.ComponentProps<"div"> {}

export const FavoriteBlogs = ({ ...rest }: Props) => {
  const api = useAxios();

  const { data, isLoading } = useQuery({
    queryKey: ["favourites"],
    queryFn: async () => api.get<FavoriteBlogsResponse>("/blogs/favourites"),
  });

  return (
    <div>
      <div className="sidebar-card" {...rest}>
        {isLoading ||
          (data?.data.blogs?.length !== 0 && (
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-300 lg:text-2xl ">
              Your Favorite ❤️
            </h3>
          ))}

        <ul className="my-5 space-y-5">
          {isLoading ? (
            <YourFavoriteSkelton />
          ) : (
            data?.data.blogs?.map((blog) => (
              <motion.li
                key={blog.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div>
                  <div className="flex items-start justify-between ">
                    <Link
                      to={`/blog/${blog.id}`}
                      className="flex-1 cursor-pointer font-medium text-slate-600 transition-all hover:text-slate-500 dark:hover:text-slate-700"
                    >
                      {blog.title}
                    </Link>
                    <ToggleBlogToFavorite
                      id={blog.id}
                      showIcon={false}
                      className="px-1"
                    >
                      <Cross />
                    </ToggleBlogToFavorite>
                  </div>

                  <p className="text-sm text-slate-600">
                    {blog.tags.split(",").map((tag) => (
                      <span key={tag} className="mr-1 text-slate-400">
                        #{tag}
                      </span>
                    ))}
                  </p>
                </div>
              </motion.li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};
