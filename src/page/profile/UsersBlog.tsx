import { BlogCard } from '@/components';
import { Blog } from '@/types';
interface Props extends React.ComponentProps<'div'> {
  usersBlog: Blog[] | undefined;
}

export const UsersBlog = ({ usersBlog }: Props) => {
  return (
    <>
      <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl">Your Blogs</h4>
      <div className="my-6 space-y-4">
        {usersBlog?.map((blog) => <BlogCard key={blog.id} blog={blog} />)}
      </div>
    </>
  );
};
