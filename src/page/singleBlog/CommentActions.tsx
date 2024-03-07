import { Trash } from "@/components";
import { useAxios } from "@/hooks";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
interface Props extends React.ComponentProps<"button"> {
  commentId: string;
}

export const CommentActions = ({ commentId, ...rest }: Props) => {
  const queryClient = useQueryClient();
  const { id } = useParams() as { id: string };
  const api = useAxios();

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["deleteComment"],
    mutationFn: async () => api.delete(`blogs/${id}/comment/${commentId}`),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["singleBlog", id] }),
  });

  const deleteComment = async () => {
    try {
      const req = await mutateAsync();
      if (req.status === 200) {
        return toast.success("Comment deleted successfully");
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log("🚀 ~ deleteComment ~ error:", error);
        return toast.error("Failed to delete comment");
      }
    }
  };
  return (
    <button
      onClick={deleteComment}
      className="mt-2 flex  cursor-pointer items-center  gap-x-2 transition-all hover:text-red-600"
      {...rest}
    >
      <Trash className="size-4" />
      {isPending ? "Deleting..." : "Delete"}
    </button>
  );
};
