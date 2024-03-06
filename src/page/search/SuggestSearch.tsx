import postmanIcon from "@/assets/others/postman.svg";
interface Props extends React.ComponentProps<"div"> {}

export const SuggestSearch = ({ ...rest }: Props) => {
  return (
    <div {...rest}>
      <img src={postmanIcon} alt="Postman" className="mx-auto h-32 w-32" />
      <p className="text-center text-lg text-slate-400">
        Start typing to search for your desire blogs
      </p>
    </div>
  );
};
