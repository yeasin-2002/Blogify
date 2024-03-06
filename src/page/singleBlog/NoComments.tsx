import commentsIcon from "@/assets/others/chat-bubble.png";
import React from "react";
interface Props extends React.ComponentProps<"div"> {}

export const NoComments = ({ ...rest }: Props) => {
  return (
    <div {...rest} className="grid place-items-center">
      <img src={commentsIcon} alt="Comment Icon" className="size-52" />
      <h3 className="text-3xl font-bold">No comments yet</h3>
      <p className="text-slate-300">Be the first to comment on this post</p>
    </div>
  );
};
