import { ArrowLeft } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
interface Props extends React.ComponentProps<'div'> {}

// assets and Icons
import { BlogCard } from '@/components';
// import { useInView } from '@/hooks';
import { homeBlogResponse } from '@/types';
import { axiosInstance } from '@/utils';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'framer-motion';

export const MainBlogs = ({ ...rest }: Props) => {
  const ref = useRef(null);
  const isVisible = useInView(ref);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    fetchPreviousPage,
  } = useInfiniteQuery({
    queryKey: ['blog'],
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
  }, [isVisible]);

  return (
    <div className="space-y-3 md:col-span-5" {...rest}>
      {data?.pages.map((group) => {
        return group.data.blogs.map((eachBlog) => (
          <BlogCard key={eachBlog.id} blog={eachBlog} />
        ));
      })}

      <div id="next-page" ref={ref}>
        {isFetchingNextPage ? 'Loading more...' : null}
      </div>

      <div>
        {!hasNextPage && (
          <div className="flex  items-center gap-x-3">
            <button
              className="alternative-dark px-4 py-2"
              onClick={() => fetchPreviousPage()}
            >
              <ArrowLeft />
              Back to Previous Page
            </button>
            <p>No more Blog found</p>
          </div>
        )}
      </div>
    </div>
  );
};
