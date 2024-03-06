import { useQuery } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import React from "react";

import { ProfileInfoSkeleton, RenderBlogSkeleton } from "@/components/Skeleton";
import { profileResponse } from "@/types";
import { axiosInstance } from "@/utils";
import { useParams } from "react-router-dom";
import { ProfileInfo } from "./ProfileInfo";
import { UsersBlog } from "./UsersBlog";

interface Props extends React.ComponentProps<"div"> {}

export const Profile = ({ ...rest }: Props) => {
  const param = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["profile", param?.id],
    queryFn: () => axiosInstance.get<profileResponse>(`/profile/${param?.id}`),
  });
  const userName = data?.data.firstName + " " + data?.data.lastName;

  return (
    <main className="mx-auto max-w-[1020px] py-8" {...rest}>
      <div className="container">
        <AnimatePresence>
          {isLoading ? (
            <div className="space-y-24">
              <ProfileInfoSkeleton />
              <RenderBlogSkeleton initialCount={10} />
            </div>
          ) : (
            <>
              <ProfileInfo User={data?.data} />
              <UsersBlog usersBlog={data?.data.blogs} userName={userName} />
            </>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
};
