import { BlogForm } from "@/components/actions/BlogForm";
import React from "react";
import { useParams } from "react-router-dom";
interface Props extends React.ComponentProps<"div"> {}

export const Edit = ({ ...rest }: Props) => {
  const { id } = useParams();
  console.log("🚀 ~ Edit ~ id:", id);

  return (
    <div {...rest}>
      <BlogForm />
    </div>
  );
};
