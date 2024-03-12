import React from "react";
interface Props extends React.ComponentProps<"input"> {}

export const SearchInput = ({ ...rest }: Props) => {
  return (
    <div className="my-8 flex-1">
      <input
        {...rest}
        type="text"
        placeholder="Start Typing to Search"
        className="w-full rounded-lg border-none bg-transparent p-2   text-base text-gray-900 outline-none ring ring-indigo-300/20 focus:ring focus:ring-indigo-600 dark:text-white"
      />
    </div>
  );
};
