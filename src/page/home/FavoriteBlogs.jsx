import { Cross, ToggleBlogToFavorite, YourFavoriteSkelton } from "@/components";
import { useAxios } from "@/hooks";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const FavoriteBlogs = ({ ...rest }) => {
  const api = useAxios();

  const { data, isLoading } = useQuery({
    queryKey: ["favourites"],
    queryFn: async () => api.get("/blogs/favourites"),
  });

  return (
    <div>
      <div className="sidebar-card" {...rest}>
        {isLoading ||
          (data?.data.blogs?.length !== 0 && (
            <h3 className="font-europa-bold text-xl font-semibold text-slate-800 dark:text-slate-300 lg:text-2xl">
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
                      className="flex-1 cursor-pointer font-europa-bold font-medium text-slate-400 transition-all hover:text-slate-500 dark:hover:text-slate-600  "
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
                      <span key={tag} className="mr-1">
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
