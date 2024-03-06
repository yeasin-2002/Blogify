interface Props extends React.ComponentProps<"button"> {
  children: React.ReactNode;
}

export const LikeBlog = ({ children, ...rest }: Props) => {
  return <button {...rest}>children</button>;
};
