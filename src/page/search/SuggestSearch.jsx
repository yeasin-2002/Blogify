import postmanIcon from "@/assets/others/postman.svg";

export const SuggestSearch = ({ ...rest }) => {
  return (
    <div
      {...rest}
      className="mx-auto flex h-full flex-col  items-center justify-center gap-4 rounded-lg  p-4 py-20  "
    >
      <img src={postmanIcon} alt="Postman" className="mx-auto h-32 w-32" />
      <p className="text-center text-lg text-slate-700 dark:text-slate-400">
        Start typing to search for your desire blogs
      </p>
    </div>
  );
};
