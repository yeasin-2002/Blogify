import React from 'react';
interface Props extends React.ComponentProps<'div'> {}

export const SideBarPost = ({ ...rest }: Props) => {
  return (
    <div className="h-full w-full space-y-5 md:col-span-2" {...rest}>
      <div className="sidebar-card">
        <h3 className="text-xl font-semibold text-slate-300 lg:text-2xl">
          Most Popular 👍️
        </h3>

        <ul className="my-5 space-y-5">
          <li>
            <h3 className="cursor-pointer font-medium text-slate-400 transition-all hover:text-slate-300">
              How to Auto Deploy a Next.js App on Ubuntu from GitHub
            </h3>
            <p className="text-sm text-slate-600">
              by
              <a href="./profile.html">Saad Hasan</a>
              <span>·</span> 100 Likes
            </p>
          </li>

          <li>
            <h3 className="cursor-pointer font-medium text-slate-400 transition-all hover:text-slate-300">
              How to Auto Deploy a Next.js App on Ubuntu from GitHub
            </h3>
            <p className="text-sm text-slate-600">
              by
              <a href="./profile.html">Saad Hasan</a>
              <span>·</span> 100 Likes
            </p>
          </li>

          <li>
            <h3 className="cursor-pointer font-medium text-slate-400 transition-all hover:text-slate-300">
              How to Auto Deploy a Next.js App on Ubuntu from GitHub
            </h3>
            <p className="text-sm text-slate-600">
              by
              <a href="./profile.html">Saad Hasan</a>
              <span>·</span> 100 Likes
            </p>
          </li>

          <li>
            <h3 className="cursor-pointer font-medium text-slate-400 transition-all hover:text-slate-300">
              How to Auto Deploy a Next.js App on Ubuntu from GitHub
            </h3>
            <p className="text-sm text-slate-600">
              by
              <a href="./profile.html">Saad Hasan</a>
              <span>·</span> 100 Likes
            </p>
          </li>
        </ul>
      </div>

      <div className="sidebar-card">
        <h3 className="text-xl font-semibold text-slate-300 lg:text-2xl">
          Your Favourites ❤️
        </h3>

        <ul className="my-5 space-y-5">
          <li>
            <h3 className="cursor-pointer font-medium text-slate-400 transition-all hover:text-slate-300">
              How to Auto Deploy a Next.js App on Ubuntu from GitHub
            </h3>
            <p className="text-sm text-slate-600">
              #tailwindcss, #server, #ubuntu
            </p>
          </li>

          <li>
            <h3 className="cursor-pointer font-medium text-slate-400 transition-all hover:text-slate-300">
              How to Auto Deploy a Next.js App on Ubuntu from GitHub
            </h3>
            <p className="text-sm text-slate-600">
              #tailwindcss, #server, #ubuntu
            </p>
          </li>

          <li>
            <h3 className="cursor-pointer font-medium text-slate-400 transition-all hover:text-slate-300">
              How to Auto Deploy a Next.js App on Ubuntu from GitHub
            </h3>
            <p className="text-sm text-slate-600">
              #tailwindcss, #server, #ubuntu
            </p>
          </li>

          <li>
            <h3 className="cursor-pointer font-medium text-slate-400 transition-all hover:text-slate-300">
              How to Auto Deploy a Next.js App on Ubuntu from GitHub
            </h3>
            <p className="text-sm text-slate-600">
              #tailwindcss, #server, #ubuntu
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
