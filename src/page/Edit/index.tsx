import { BlogPageSkeleton } from "@/components";
import { BlogForm } from "@/components/actions/BlogForm";
import { useAxios } from "@/hooks";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { flushSync } from "react-dom";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

interface Props extends React.ComponentProps<"div"> {}

export const Edit = ({ ...rest }: Props) => {
  const params = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const api = useAxios();

  const { isLoading, data } = useQuery({
    queryKey: ["singleBlog", params.id],
    queryFn: async () => api.get<Blog>(`/blogs/${params?.id}`),
  });

  const { mutateAsync } = useMutation({
    mutationKey: ["createBlog"],
    mutationFn: async (body: FormData) =>
      api.patch<Blog>(`/blogs/${params?.id}`, body),
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: ["blog"] });
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      const req = await mutateAsync(data);

      if (req.status === 200 || req.status === 201) {
        toast.success("Blog Edited successfully");
        console.log(req?.data?.id);
        navigate(`/blog/${req?.data?.id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
