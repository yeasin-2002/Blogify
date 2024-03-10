import { BlogForm } from "@/components/actions/BlogForm";
import { axiosInstance } from "@/utils";
import { useMutation } from "@tanstack/react-query";
import React from "react";
interface Props extends React.ComponentProps<"div"> {}

export const CreateBlog = ({ ...rest }: Props) => {
  const { mutateAsync } = useMutation({
    mutationKey: ["createBlog"],
    mutationFn: async (body: FormData) => axiosInstance.post("/blogs", body),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const req = await mutateAsync(data);
      console.log(req);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div {...rest}>
      <BlogForm onSave={onSubmit} />
    </div>
  );
};
