import { useAuth } from "@/hooks";

import React from "react";
import { FavoriteBlogs } from "./FavoriteBlogs";
import { MostPopularBlogs } from "./MostPopularBlogs";
interface Props extends React.ComponentProps<"div"> {}

export const SideBarPost = ({ ...rest }: Props) => {
  const auth = useAuth();

  return (
    <div className="h-full w-full space-y-5 md:col-span-2" {...rest}>
      <MostPopularBlogs />
      {auth?.authUser && auth?.authToken && <FavoriteBlogs />}
    </div>
  );
};
