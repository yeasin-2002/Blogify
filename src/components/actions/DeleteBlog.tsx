import deleteIcon from "@/assets/icons/delete.svg";
import { useAxios } from "@/hooks";
import { cn } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface Props extends React.ComponentProps<"button"> {
  id: string | undefined;
}

export const DeleteBlog = (props: Props) => {
  const api = useAxios();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutateAsync } = useMutation({
    mutationKey: ["deleteBlog", props?.id],
    mutationFn: async () => api.delete(`/blogs/${props?.id}`),
    onSuccess: () => {
      queryClient.invalidateQueries();
      navigate(-1 || "/");
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
    <button className={cn(props.className)} onClick={handleDelete}>
      {props.children || (
        <>
          <img src={deleteIcon} alt="Delete" />
          Delete
        </>
      )}
    </button>
  );
};
