import warningIcon from "@/assets/others/warning.png";
import { Cross } from "@/components";
import React from "react";
import { Link } from "react-router-dom";
interface Props extends React.ComponentProps<"div"> {
  setIsShowPortal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BlockCommentingIfUnauthenticated = ({
  setIsShowPortal,
  ...rest
}: Props) => {
  return (
    <div
      {...rest}
      className="rounded-md border border-slate-500 bg-[#030317] p-4 "
    >
      <div className="flex items-center justify-between ">
        <p>Log in to continue</p>
        <Cross />
      </div>
      <div className="flex flex-col items-center justify-center   ">
        <img src={warningIcon} alt="Warning" className="size-32" />
        <p>
          You need to be logged in to comment.
          <br />
          Please log in or create an account.
        </p>
        <div className="mt-8 flex w-full items-center">
          <Link to={"/login"} className="alternative  w-full text-center">
            Log In
          </Link>
          <Link
            to={"/register"}
            className="alternative-orange w-full  py-3  text-center"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};
