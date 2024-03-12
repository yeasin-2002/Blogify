import React from "react";
interface Props extends React.ComponentProps<"div"> {}

import logo from "@/assets/logo.svg";
import { contactItems } from "@/data";

export const Footer = ({ ...rest }: Props) => {
  return (
    <footer
      className="my-6 bg-white text-gray-950  md:my-8 dark:bg-midnightBlue"
      {...rest}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="/">
          <img className="w-28" src={logo} alt="lws" />
        </a>
        <ul className="flex items-center space-x-5">
          {contactItems.map((item) => (
            <li className="text-center" key={item.id}>
              <a
                className="text-gray-700 transition-all duration-200 hover:text-white dark:text-white/50"
                href={item.link}
              >
                <item.icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
