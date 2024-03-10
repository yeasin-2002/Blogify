import { useAxios } from "@/hooks";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

interface Props extends React.ComponentProps<"button"> {
  children: React.ReactNode;
}

export const ToggleBlogToFavorite = ({ children, ...rest }: Props) => {
  const api = useAxios();
  const queryClient = useQueryClient();
  const params = useParams();

  const { mutateAsync } = useMutation({
    mutationKey: ["favourites-toggle", params.blog_id],
    mutationFn: async () => api.patch(`/blogs/${params.id}/favourite`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favourites"] });
    },
  });

  const handlerToggle = async () => {
    try {
      const req = await mutateAsync();
      console.log("🚀 ~ handlerToggle ~ req:", req);
      // toast.success("Blog added to favourite");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <button {...rest} onClick={handlerToggle}>
      {children}
    </button>
  );
};
