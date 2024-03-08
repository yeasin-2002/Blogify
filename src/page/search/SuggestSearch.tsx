import postmanIcon from "@/assets/others/postman.svg";
interface Props extends React.ComponentProps<"div"> {}

export const SuggestSearch = ({ ...rest }: Props) => {
  return (
    <div
      {...rest}
      className="mx-auto flex h-full flex-col  items-center justify-center gap-4 rounded-lg bg-slate-900 p-4 py-20  "
    >
      <img src={postmanIcon} alt="Postman" className="mx-auto h-32 w-32" />
      <p className="text-center text-lg text-slate-400">
        Start typing to search for your desire blogs
      </p>
    </div>
  );
};
