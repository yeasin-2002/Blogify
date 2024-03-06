import { Avatar } from "@/components";
import { Comment } from "@/types";
import React from "react";
interface Props extends React.ComponentProps<"div"> {
  comment: Comment;
}

export const CommentItems = ({ comment, ...rest }: Props) => {
  return (
    <div className="my-8 flex items-start space-x-4" {...rest}>
      <Avatar
        img={comment.author.avatar}
        name={comment.author.firstName}
        className="avater-img bg-orange-600 text-white"
      />
      <div className="w-full">
        <h5 className="text-slate -500 font-bold">
          {comment.author.firstName} {comment.author.lastName}
        </h5>
        <p className="text-slate-300">
          {comment.content}
          this:
        </p>
      </div>
    </div>
  );
};
