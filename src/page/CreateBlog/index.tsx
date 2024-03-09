import { BlogForm } from "@/components/actions/BlogForm";
import React from "react";
interface Props extends React.ComponentProps<"div"> {}

export const CreateBlog = ({ ...rest }: Props) => {
  return (
    <div {...rest}>
      <BlogForm />
    </div>
  );
};
