import { Comment } from "@/types";
import React from "react";
import { CommentItems } from "./CommentItems";
import { NoComments } from "./NoComments";
interface Props extends React.ComponentProps<"div"> {
  comments: Comment[];
}

export const BlogComments = ({ comments, ...rest }: Props) => {
  return (
    <div {...rest}>
      <section id="comments">
        <div className="container mx-auto w-full md:w-10/12">
          <h2 className="my-8 text-3xl font-bold">
            Comments
            {comments.length > 0 && `(${comments.length})`}
          </h2>
          <div className="items -center flex space-x-4">
            <div className="avater-img bg-indigo-600 text-white">
              <span className="">S</span>
            </div>
            <div className="w-full">
              <textarea
                className="w-full rounded-md border border-slate-500 bg-[#030317] p-4 text-slate-300 focus:outline-none"
                placeholder="Write a comment"
              ></textarea>
              <div className="mt-4 flex justify-end">
                <button className="rounded-md bg-indigo-600 px-6 py-2 text-white transition-all duration-200 hover:bg-indigo-700 md:py-3">
                  Comment
                </button>
              </div>
            </div>
          </div>
          {comments.length > 0 ? (
            comments?.map((cm) => <CommentItems comment={cm} />)
          ) : (
            <NoComments />
          )}
        </div>
      </section>
    </div>
  );
};
