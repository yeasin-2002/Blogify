import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
interface Props extends React.ComponentProps<"div"> {}

import discoverIcon from "@/assets/others/binocular.png";
import { BlogCard, MainBlogSkeleton, Spinners180Ring } from "@/components";
import { homeBlogResponse } from "@/types";
import { axiosInstance } from "@/utils";

// import { useIntersectionObserver } from "@/hooks";
// import { useInView } from "framer-motion";

export const MainBlogs = ({ ...rest }: Props) => {
  // const ref = useRef<null | HTMLDivElement>(null);
  // const isVisible = useIntersectionObserver({ element: ref });
  // const isVisible = useInView(ref);
  const [ref, isVisible] = useInView();

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
      axiosInstance.get<homeBlogResponse>(`/blogs?page=${pageParam}`),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.data.blogs.length
        ? allPages.length + 1
        : undefined;
      return nextPage;
    },
  });

  useEffect(() => {
    if (isVisible && hasNextPage && !isFetching && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, isVisible]);

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
              </div>
            )}
          </div>
        </div>
      )}

      {(isLoading || isFetching) && <MainBlogSkeleton />}
      {isFetchingNextPage && (
        <div>
          <div className="mt-8 flex w-full items-center justify-center  ">
            <Spinners180Ring />
            <p>Loading more blogs</p>
          </div>
        </div>
      )}
    </>
  );
};
