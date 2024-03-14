import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";

import discoverIcon from "@/assets/others/binocular.png";
import { BlogCard, MainBlogSkeleton } from "@/components";
import { axiosInstance } from "@/utils";

export const MainBlogs = ({ ...rest }) => {
  const ref = useRef(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isError,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["blog"],
    queryFn: async ({ pageParam = 1 }) =>
      axiosInstance.get(`/blogs?page=${pageParam}`),

    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.data.blogs.length
        ? allPages.length + 1
        : undefined;
      return nextPage;
    },
  });

  useEffect(() => {
    const observer = new IntersectionObserver((items) => {
      if (
        items[0].isIntersecting &&
        hasNextPage &&
        !isFetching &&
        !isFetchingNextPage
      ) {
        fetchNextPage();
      }
    });
    ref?.current && observer.observe(ref?.current);

    () => {
      observer.disconnect();
    };
  }, [fetchNextPage, hasNextPage, isFetching, isFetchingNextPage]);

  return (
    <>
      {!isLoading && (
        <div className="space-y-3 md:col-span-5" {...rest}>
          {data?.pages.map((group) => {
            return group.data.blogs.map((eachBlog) => (
              <BlogCard key={eachBlog.id} blog={eachBlog} />
            ));
          })}

          <div id="next-page" ref={ref} />

          <div>
            {!hasNextPage && !isError && (
              <div className="mt-24  flex flex-col items-center justify-center gap-x-3 *:text-center">
                <img src={discoverIcon} alt="Discover" className="size-40" />
                <p className="text-2xl font-bold text-gray-500">
                  You have discovered all the blogs,
                  <br />
                  <span className="text-base font-normal">
                    Please check back later for more blogs
                  </span>
                </p>
                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="mt-3 rounded-md bg-slate-300 px-4  py-2  text-slate-950 dark:bg-slate-800 dark:text-slate-200"
                >
                  Go to Top
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {(isLoading || isFetchingNextPage) && <MainBlogSkeleton />}
    </>
  );
};
