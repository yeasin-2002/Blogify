import { useQuery } from '@tanstack/react-query';
import { AnimatePresence } from 'framer-motion';
import React from 'react';

import { ProfileInfoSkeleton, RenderBlogSkeleton } from '@/components/Skeleton';
import { useAuth } from '@/hooks';
import { profileResponse } from '@/types';
import { axiosInstance } from '@/utils';
import { ProfileInfo } from './ProfileInfo';
import { UsersBlog } from './UsersBlog';

interface Props extends React.ComponentProps<'div'> {}

export const Profile = ({ ...rest }: Props) => {
  const { authUser } = useAuth();
  const { data, isLoading } = useQuery({
    queryKey: ['profile', authUser?.id],
    queryFn: () =>
      axiosInstance.get<profileResponse>(`/profile/${authUser?.id}`),
  });

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
              <ProfileInfo authUser={data?.data} />
              <UsersBlog usersBlog={data?.data.blogs} />
            </>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
};
