interface Props extends React.ComponentProps<"button"> {
  children: React.ReactNode;
}

export const AddBlogToFavorite = ({ children, ...rest }: Props) => {
  return <button {...rest}>{children}</button>;
};
