import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";

import { SingleBlogNotFound, SingleBlogSkeleton } from "@/components";
import { Blog } from "@/types";
import { baseUrl } from "@/utils";
import axios from "axios";
import { BlogComments } from "./BlogComments";
import { BlogContent } from "./BlogContent";
import { BlogFloatingActions } from "./BlogFloatingActions";

interface Props extends React.ComponentProps<"div"> {}

export const SingleBlog = ({ ...rest }: Props) => {
  const params = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["singleBlog", params?.id],
    queryFn: async () => axios.get<Blog>(baseUrl + `/blogs/${params?.id}`),
    retry: 1,
    refetchOnWindowFocus: false,
  });

  return (
    <div {...rest}>
      {!isLoading && data?.status === 200 && (
        <>
          <main>
            <BlogContent blog={data?.data} />
            <BlogComments comments={data?.data?.comments || []} />
          </main>

          <BlogFloatingActions
            totalComments={data?.data?.comments?.length}
            totalLikes={data?.data.likes?.length}
            blogId={params?.id}
            allLikes={data?.data.likes}
          />
        </>
      )}

      {isLoading && !isError && <SingleBlogSkeleton />}
      {!isLoading && isError && <SingleBlogNotFound />}
    </div>
  );
};
