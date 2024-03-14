import { useNavigate } from "react-router-dom";
import notfoundImg from "../../assets/others/404_Page.svg";

import { ArrowBack, Home } from "@/components/icons";

export const SingleBlogNotFound = ({ ...rest }) => {
  const router = useNavigate();

  return (
    <section
      {...rest}
      className="container mx-auto grid min-h-screen grid-cols-1 items-center justify-between px-6 py-12 md:grid-cols-2"
    >
      <div>
        <p className="text-sm font-medium text-blue-500 dark:text-blue-400">
          404 error
        </p>
        <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
          We can’t find that Blog
        </h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400">
          Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
          mistyped the URL? Be sure to check your spelling.
        </p>

        <div className="mt-6 flex items-center gap-x-3">
          <button
            className="flex w-1/2 items-center justify-center gap-x-2 rounded-lg border bg-gray-200 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800 sm:w-auto"
            onClick={() => router.back()}
          >
            <ArrowBack />
            <span>Go back</span>
          </button>

          <button
            className="flex  w-1/2 shrink-0 items-center gap-x-2 rounded-lg bg-blue-500 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 sm:w-auto"
            onClick={() => router.push("/")}
          >
            <Home className="size-4" />
            Take Me Home
          </button>
        </div>
      </div>
      <div>
        <img src={notfoundImg} alt="Not found" className="h-full w-full" />
      </div>
    </section>
  );
};
