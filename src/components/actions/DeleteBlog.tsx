import { useAxios } from "@/hooks";
import { cn } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Trash } from "../icons";

interface Props extends React.ComponentProps<"button"> {
  id: string | undefined;
  navigateTo?: string | number;
}

export const DeleteBlog = ({
  id,
  navigateTo,
  className,
  children,
  ...rest
}: Props) => {
  const api = useAxios();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutateAsync } = useMutation({
    mutationKey: ["deleteBlog", id],
    mutationFn: async () => api.delete(`/blogs/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries();
      typeof navigateTo == "string" && navigateTo
        ? navigate(navigateTo)
        : navigate(-1);
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
