import { MainBlogs } from "./MainBlogs";
import { SideBarPost } from "./SideBarPost";

export const Home = ({ ...rest }) => {
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
