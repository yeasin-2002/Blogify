import React from "react";
interface Props extends React.ComponentProps<"div"> {}

export const SingleBlogSkeleton = ({ ...rest }: Props) => {
  return <div {...rest}>SingleBlog.skleton</div>;
};
