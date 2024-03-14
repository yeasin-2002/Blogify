import { useAxios } from "@/hooks";
import { cn } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Trash } from "../icons";

export const DeleteBlog = ({
  id,
  navigateTo,
  className,
  children,
  ...rest
}) => {
  const api = useAxios();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutateAsync } = useMutation({
    mutationKey: ["deleteBlog", id],
    mutationFn: async () => api.delete(`/blogs/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries();
      navigateTo && navigate(navigateTo);
    },
  });

  const handleDelete = async () => {
    try {
      const req = await mutateAsync();
      console.log("🚀 ~ handleDelete ~ req:", req);
    } catch (error) {
      toast.error("Failed to delete your blog");
    }
  };
  return (
    <button className={cn(className)} onClick={handleDelete} {...rest}>
      {children || (
        <>
          <Trash />
          Delete
        </>
      )}
    </button>
  );
};
