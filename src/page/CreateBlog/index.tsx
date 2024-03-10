import { BlogForm } from "@/components/actions/BlogForm";
import { useAxios } from "@/hooks";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
interface Props extends React.ComponentProps<"div"> {}

export const CreateBlog = ({ ...rest }: Props) => {
  const api = useAxios();
  const navigate = useNavigate();

  const { mutateAsync } = useMutation({
    mutationKey: ["createBlog"],
    mutationFn: async (body: FormData): Promise<AxiosResponse> =>
      api.post("/blogs", body, {
        headers: { "Content-Type": "multipart/form-data" },
      }),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const req = await mutateAsync(data);

      if (req.status === 201) {
        toast.success("Blog created successfully");
        navigate(`/blogs/${req.data.blog.id}`);
      }
    } catch (error) {
      console.log(error);
      toast.error("Unable to create blog");
    }
  };
  return (
    <div {...rest}>
      <BlogForm onSave={onSubmit} />
    </div>
  );
};
