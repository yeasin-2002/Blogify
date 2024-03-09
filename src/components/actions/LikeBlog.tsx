import { useAxios } from "@/hooks";
import { cn } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

interface Props extends React.ComponentProps<"button"> {
  children: React.ReactNode;
  blogId: string;
  invalidateKey: string[];
}

export const LikeBlog = ({
  children,
  blogId,
  className,
  invalidateKey,
  ...rest
}: Props) => {
  const queryClient = useQueryClient();
  const api = useAxios();

  const { mutateAsync } = useMutation({
    mutationKey: ["addBlogToFavorite", blogId],
    mutationFn: async () => api.post(`/blogs/${blogId}/like`),
  });
  const handleLike = async () => {
    try {
      const req = await mutateAsync();

      if (req.status === 200) {
        return queryClient.invalidateQueries({ queryKey: invalidateKey });
      }
    } catch (error) {
      console.log("🚀 ~ handleLike ~ error:", error);
      return toast.error("Something went wrong");
    }
  };

  return (
    <button
      {...rest}
      onClick={handleLike}
      className={cn("flex items-center gap-x-1", className)}
    >
      {children}
    </button>
  );
};
