import { useAxios } from "@/hooks";
import { FavoriteBlogsResponse } from "@/types";
import { cn } from "@/utils";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { HeartIcon } from "lucide-react";
import { toast } from "react-toastify";

interface Props extends React.ComponentProps<"button"> {
  children?: React.ReactNode;
  id: string;
  showIcon?: boolean;
}

export const ToggleBlogToFavorite = ({
  children,
  id,
  showIcon = true,

  ...rest
}: Props) => {
  const api = useAxios();
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationKey: ["favourites-toggle", id],
    mutationFn: async () => api.patch(`/blogs/${id}/favourite`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favourites"] });
    },
  });

  const { data } = useQuery({
    queryKey: ["favourites"],
    queryFn: async () => api.get<FavoriteBlogsResponse>("/blogs/favourites"),
  });

  const isIdExist = data?.data.blogs?.some((blog) => blog.id === id);

  const handlerToggle = async () => {
    try {
      const req = await mutateAsync();
      console.log("🚀 ~ handlerToggle ~ req:", req);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <button {...rest} onClick={handlerToggle}>
      {showIcon && (
        <HeartIcon
          className={cn({
            "text-red-500": isIdExist,
            "text-gray-500": !isIdExist,
          })}
        />
      )}
      {children}
    </button>
  );
};
