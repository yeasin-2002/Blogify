import { MostPopularSkeleton } from "@/components";
import { axiosInstance } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { PopularBlogItems } from "./PopularBlogItems";

export const MostPopularBlogs = ({ ...rest }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["mostPopularBlogs"],
    queryFn: async () => axiosInstance.get("/blogs/popular"),
  });

  return (
    <div className="sidebar-card" {...rest}>
      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-300 lg:text-2xl">
        Most Popular
      </h3>

      <ul className="my-5 space-y-5">
        {isLoading ? (
          <MostPopularSkeleton />
        ) : (
          data?.data?.blogs?.map((blog) => (
            <PopularBlogItems key={blog.id} data={blog} />
          ))
        )}
      </ul>
    </div>
  );
};
