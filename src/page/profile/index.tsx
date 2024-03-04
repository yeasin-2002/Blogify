import { useAuth } from '@/hooks';
import { axiosInstance } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { ProfileInfo } from './ProfileInfo';
import { UsersBlog } from './UsersBlog';
interface Props extends React.ComponentProps<'div'> {}

export const Profile = ({ ...rest }: Props) => {
  const { authUser } = useAuth();
  const { data } = useQuery({
    queryKey: ['profile', authUser?.id],
    queryFn: () => axiosInstance.get(`/profile/${authUser?.id}`),
  });
  console.log(data);
  return (
    <main className="mx-auto max-w-[1020px] py-8" {...rest}>
      <div className="container">
        <ProfileInfo />
        <UsersBlog />
      </div>
    </main>
  );
};
