import { useAxios } from "@/hooks";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

interface Props extends React.ComponentProps<"button"> {
  children: React.ReactNode;
  id: string;
}

export const ToggleBlogToFavorite = ({ children, id, ...rest }: Props) => {
  const api = useAxios();
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationKey: ["favourites-toggle", id],
    mutationFn: async () => api.patch(`/blogs/${id}/favourite`),
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
