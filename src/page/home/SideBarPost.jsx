import { useAuth } from "@/hooks";

import { FavoriteBlogs } from "./FavoriteBlogs";
import { MostPopularBlogs } from "./MostPopularBlogs";

export const SideBarPost = ({ ...rest }) => {
  const auth = useAuth();

  return (
    <div className="h-full w-full space-y-5 md:col-span-2" {...rest}>
      <MostPopularBlogs />
      {auth?.authUser && auth?.authToken && <FavoriteBlogs />}
    </div>
  );
};
