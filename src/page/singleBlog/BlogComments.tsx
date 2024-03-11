import { Comment } from "@/types";
import React from "react";
import { CommentItems } from "./CommentItems";
import { CreateComment } from "./CreateComment";
import { NoComments } from "./NoComments";
interface Props extends React.ComponentProps<"div"> {
  comments: Comment[];
}

export const BlogComments = ({ comments, ...rest }: Props) => {
  return (
    <section id="blog-comments" {...rest}>
      <div className="container mx-auto w-full md:w-10/12">
        <CreateComment comments={comments} />
        {comments?.length > 0 ? (
          comments?.map((cm) => <CommentItems comment={cm} key={cm.id} />)
        ) : (
          <NoComments />
        )}
      </div>
    </section>
  );
};
