import React from 'react';
interface Props extends React.ComponentProps<'div'> {}

// assets and Icons
import { BlogCard } from '@/components';

export const MainBlogs = ({ ...rest }: Props) => {
  return (
    <div className="space-y-3 md:col-span-5" {...rest}>
      <BlogCard showActionModal />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
};
