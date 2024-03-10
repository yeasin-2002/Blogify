import { BlogPageSkeleton } from "@/components";
import { BlogForm } from "@/components/actions/BlogForm";
import { axiosInstance } from "@/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";

interface Props extends React.ComponentProps<"div"> {}

export const Edit = ({ ...rest }: Props) => {
  const params = useParams();

  const { isLoading, data } = useQuery({
    queryKey: ["singleBlog", params.id],
    queryFn: async () => axiosInstance.get<Blog>(`/blogs/${params?.id}`),
  });

  const { mutateAsync } = useMutation({
    mutationKey: ["createBlog"],
    mutationFn: async (body: FormData) =>
      axiosInstance.post<Blog>("/blogs", body),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const req = await mutateAsync(data);
      console.log(req);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);

  return (
    <div {...rest}>
      {isLoading ? (
        <BlogPageSkeleton />
      ) : (
        <BlogForm
          onSave={onSubmit}
          defaultBlogValues={{
            title: data?.data.title,
            content: data?.data.content,
            tags: data?.data.tags,
            thumbnail: data?.data?.thumbnail || "",
          }}
        />
      )}
    </div>
  );
};
