import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
interface Props extends React.ComponentProps<"div"> {}

// temporary
import { SingleBlogSkeleton } from "@/components";
import { Blog } from "@/types";
import { baseUrl } from "@/utils";
import axios from "axios";
import { BlogComments } from "./BlogComments";
import { BlogContent } from "./BlogContent";
import { BlogFloatingActions } from "./BlogFloatingActions";

export const SingleBlog = ({ ...rest }: Props) => {
  const params = useParams();

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["singleBlog", params.id],
    queryFn: async () => axios.get<Blog>(baseUrl + `/blogs/${params?.id}`),
  });

  return (
    <div {...rest}>
      {!isLoading && isSuccess ? (
        <>
          <main>
            <BlogContent blog={data?.data} />
            <BlogComments comments={data?.data?.comments || []} />
          </main>

          <BlogFloatingActions
            totalComments={data?.data?.comments?.length}
            totalLikes={data?.data.likes?.length}
          />
        </>
      ) : (
        <SingleBlogSkeleton />
      )}
    </div>
  );
};
