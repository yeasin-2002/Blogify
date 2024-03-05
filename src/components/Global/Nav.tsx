import React from 'react';
import { Link } from 'react-router-dom';

interface Props extends React.ComponentProps<'div'> {}

import searchIcon from '@/assets/icons/search.svg';
import logo from '@/assets/logo.svg';
import { useAuth } from '@/hooks';
import { Avatar } from '../ui';

export const Nav = ({ ...rest }: Props) => {
  const authData = useAuth();

  return (
    <header {...rest}>
      <nav className="container">
        <div>
          <Link to="/">
            <img className="w-32" src={logo} alt="lws" />
          </Link>
        </div>

        <div>
          <ul className="flex items-center space-x-5">
            <li>
              <a
                href="./createBlog.html"
                className="rounded-md bg-indigo-600 px-6 py-2 text-white transition-all duration-200 hover:bg-indigo-700 md:py-3"
              >
                Write
              </a>
            </li>
            <li>
              <a
                href="./search.html"
                className="flex cursor-pointer items-center gap-2"
              >
                <img src={searchIcon} alt="Search" />
                <span>Search</span>
              </a>
            </li>

            {authData.authToken && authData.authUser ? (
              <li>
                <Link
                  to={`/profile/${authData?.authUser?.id}`}
                  className="flex items-center"
                >
                  <Avatar
                    img={authData.authUser.avatar}
                    name={authData.authUser.firstName}
                    className="size-10"
                  />

                  <span className="ml-2 truncate text-white">
                    {authData.authUser.firstName +
                      ' ' +
                      authData.authUser.lastName}
                  </span>
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="text-white/50 transition-all duration-200 hover:text-white"
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
