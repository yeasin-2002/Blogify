import { Trash } from "@/components";
import { useAxios } from "@/hooks";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const CommentActions = ({ commentId, ...rest }) => {
  const queryClient = useQueryClient();
  const { id } = useParams();
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
      if (req.statusText !== "OK") {
        return toast.error("Failed to delete comment");
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
