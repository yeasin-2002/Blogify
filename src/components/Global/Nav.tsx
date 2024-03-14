import React from "react";
import { Link } from "react-router-dom";

interface Props extends React.ComponentProps<"div"> {}

import logo from "@/assets/logo.svg";
import { ThemeSwitcher } from "@/components";
import { useAuth } from "@/hooks";
import { SearchBlogs } from "@/page/search";
import { Avatar } from "../ui";

export const Nav = ({ ...rest }: Props) => {
  const authData = useAuth();

  return (
    <header {...rest}>
      <nav className="container ">
        <div>
          <Link to="/">
            <img className="w-32" src={logo} alt="lws" />
          </Link>
        </div>

        <div>
          <ul className="flex items-center space-x-5">
            <li>
              <Link
                to="/write"
                className="rounded-md bg-indigo-600 px-6 py-2 text-white transition-all duration-200 hover:bg-indigo-700 md:py-3"
              >
                Write
              </Link>
            </li>
            <li>
              <ThemeSwitcher />
            </li>
            <li>
              {authData?.authToken && authData?.authUser && <SearchBlogs />}
            </li>

            {authData?.authToken && authData?.authUser ? (
              <li>
                <Link
                  to={`/profile/${authData?.authUser?.id}`}
                  className="flex items-center"
                >
                  <Avatar
                    img={authData?.authUser?.avatar}
                    name={authData?.authUser?.firstName}
                    className="size-10"
                  />

                  <span className="ml-2 truncate text-gray-950 dark:text-white">
                    {authData?.authUser?.firstName +
                      " " +
                      authData?.authUser?.lastName}
                  </span>
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="text-gray-900 transition-all duration-200 hover:text-white dark:text-white/50"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};
