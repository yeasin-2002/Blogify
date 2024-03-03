import React from 'react';
import { Link } from 'react-router-dom';

interface Props extends React.ComponentProps<'div'> {}

import searchIcon from '@/assets/icons/search.svg';
import logo from '@/assets/logo.svg';
import { useAuth } from '@/hooks';

export const Nav = ({ ...rest }: Props) => {
  const authData = useAuth();
  return (
    <header {...rest}>
      <nav className="container">
        <div>
          <a href="./index.html">
            <img className="w-32" src={logo} alt="lws" />
          </a>
        </div>

        {/* Actions - Login, Write, Home, Search */}
        {/* Notes for Developers */}
        {/* For Logged in User - Write, Profile, Logout Menu */}
        {/* For Not Logged in User - Login Menu */}
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
              <li className="flex items-center">
                <div className="avater-img bg-orange-600 text-white">
                  <span className="">S</span>
                </div>

                <Link to="/profile">
                  <span className="ml-2 text-white">Saad Hasan</span>
                </Link>
              </li>
            ) : (
              <li>
                <a
                  href="/login"
                  className="text-white/50 transition-all duration-200 hover:text-white"
                >
                  Login
                </a>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};
