import { useAxios } from "@/hooks";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface Props extends React.ComponentProps<"button"> {
  children: React.ReactNode;
}

export const ToggleBlogToFavorite = ({ children, ...rest }: Props) => {
  const api = useAxios();
  const queryClient = useQueryClient();

  useMutation({
    mutationKey: ["favourites-toggle"],
    mutationFn: async (blogId: string) =>
      api.post(`/blogs/${blogId}/favourites`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favourites"] });
    },
  });

  const handlerToggle = async () => {};
  return (
    <button {...rest} onClick={handlerToggle}>
      {children}
    </button>
  );
};
