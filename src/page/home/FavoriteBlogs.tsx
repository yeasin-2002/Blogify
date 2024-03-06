import { FavoriteBlogsResponse } from "@/types";
import { axiosInstance } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import React from "react";
interface Props extends React.ComponentProps<"div"> {}

export const FavoriteBlogs = ({ ...rest }: Props) => {
  //   const { data } = useQuery({
  //     queryKey: ["favourites"],
  //     queryFn: async () =>
  //       axiosInstance.get<FavoriteBlogsResponse>("/blogs/favourites"),
  //   });

  return (
    <div className="sidebar-card" {...rest}>
      <h3 className="text-xl font-semibold text-slate-300 lg:text-2xl">
        Your Favorite ❤️
      </h3>

      <ul className="my-5 space-y-5">
        <li>
          <h3 className="cursor-pointer font-medium text-slate-400 transition-all hover:text-slate-300">
            How to Auto Deploy a Next.js App on Ubuntu from GitHub
          </h3>
          <p className="text-sm text-slate-600">
            #tailwindcss, #server, #ubuntu
          </p>
        </li>

        <li>
          <h3 className="cursor-pointer font-medium text-slate-400 transition-all hover:text-slate-300">
            How to Auto Deploy a Next.js App on Ubuntu from GitHub
          </h3>
          <p className="text-sm text-slate-600">
            #tailwindcss, #server, #ubuntu
          </p>
        </li>

        <li>
          <h3 className="cursor-pointer font-medium text-slate-400 transition-all hover:text-slate-300">
            How to Auto Deploy a Next.js App on Ubuntu from GitHub
          </h3>
          <p className="text-sm text-slate-600">
            #tailwindcss, #server, #ubuntu
          </p>
        </li>

        <li>
          <h3 className="cursor-pointer font-medium text-slate-400 transition-all hover:text-slate-300">
            How to Auto Deploy a Next.js App on Ubuntu from GitHub
          </h3>
          <p className="text-sm text-slate-600">
            #tailwindcss, #server, #ubuntu
          </p>
        </li>
      </ul>
    </div>
  );
};
