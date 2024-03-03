import React from 'react';
interface Props extends React.ComponentProps<'div'> {}

import searchIcon from '@/assets/icons/search.svg';
import logo from '@/assets/logo.svg';

export const Nav = ({ ...rest }: Props) => {
  return (
    <header {...rest}>
      <nav className="container">
        {/* Logo */}
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
            <li>
              <a
                href="./login.html"
                className="text-white/50 transition-all duration-200 hover:text-white"
              >
                Login
              </a>
            </li>
            <li className="flex items-center">
              {/* Circular Div with background color */}
              <div className="avater-img bg-orange-600 text-white">
                <span className="">S</span>
                {/* User's first name initial */}
              </div>

              {/* Logged-in user's name */}
              <a href="./profile.html">
                <span className="ml-2 text-white">Saad Hasan</span>
              </a>

              {/* Profile Image */}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
