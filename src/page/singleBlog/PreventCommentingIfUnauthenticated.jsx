import warningIcon from "@/assets/others/warning.png";
import { Cross } from "@/components";
import { Link } from "react-router-dom";

export const PreventCommentingIfUnauthenticated = ({
  setIsShowPortal,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className="h-full w-full rounded-md border border-slate-500  bg-gray-200 p-4  dark:bg-midnightBlue"
    >
      <div className="flex items-center justify-between ">
        <p>Log in to continue</p>
        <Cross
          onClick={() => setIsShowPortal(false)}
          className="h-6 w-6 cursor-pointer fill-current text-slate-800 transition-all  duration-200 hover:text-slate-700 dark:text-slate-300 dark:hover:text-slate-100"
        />
      </div>
      <div className="flex flex-col items-center justify-center   ">
        <img src={warningIcon} alt="Warning" className="size-32" />
        <p>
          You need to be logged in to comment.
          <br />
          Please log in or create an account.
        </p>
        <div className="mt-8 flex w-full items-center justify-center *:w-52">
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
