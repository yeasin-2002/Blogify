import React from 'react';
import { ProfileInfo } from './ProfileInfo';
import { UsersBlog } from './UsersBlog';
interface Props extends React.ComponentProps<'div'> {}

export const Profile = ({ ...rest }: Props) => {
  return (
    <main className="mx-auto max-w-[1020px] py-8" {...rest}>
      <div className="container">
        <ProfileInfo />
        <UsersBlog />
      </div>
    </main>
  );
};
