interface Props {
  sortBy: SearchFilter;
  blog: Blog[];
}

export const searchAndSortBlog = ({ blog, sortBy }: Props) => {
  return blog.sort((a, b) => {
    switch (sortBy) {
      case "latest": {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      }
      case "oldest": {
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      }
      case "most-liked": {
        return b.likes.length - a.likes.length;
      }
      case "most-commented": {
        return (b.comments?.length || 0) - (a.comments?.length || 0);
      }

      default: {
        return 0;
      }
    }
  });
};
