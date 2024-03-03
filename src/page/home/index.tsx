import React from 'react';
interface Props extends React.ComponentProps<'div'> {}

import { MainBlogs } from './MainBlogs';
import { SideBarPost } from './SideBarPost';

export const Home = ({ ...rest }: Props) => {
  return (
    <div {...rest}>
      <main>
        <section>
          <div className="container">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-7">
              <MainBlogs />
              <SideBarPost />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
