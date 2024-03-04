import React from 'react';
interface Props extends React.ComponentProps<'div'> {}

export const SingleBlog = ({ ...rest }: Props) => {
  return (
    <div {...rest}>
      <main>
        {/* Begin Blogs */}
        <section>
          <div className="container py-8 text-center">
            <h1 className="text-3xl font-bold md:text-5xl">
              Integer Maecenas Eget Viverra
            </h1>
            <div className="my-4 flex items-center justify-center gap-4">
              <div className="flex items-center space-x-2 capitalize">
                <div className="avater-img bg-indigo-600 text-white">
                  <span className="">S</span>
                </div>
                <h5 className="text-sm text-slate-500">Saad Hasan</h5>
              </div>
              <span className="dot text-sm text-slate-700">June 28, 2018</span>
              <span className="dot text-sm text-slate-700">100 Likes</span>
            </div>
            <img
              className="mx-auto h-80 w-full object-cover md:h-96 md:w-8/12"
              src="./assets/blogs/React-Roadmap.jpg"
              alt=""
            />

            {/* Tags */}
            <ul className="tags">
              <li>JavaScript</li>
              <li>Node</li>
              <li>React</li>
              <li>Next</li>
            </ul>

            {/* Content */}
            <div className="mx-auto w-full py-2 !text-left text-base leading-8 text-slate-300 md:w-10/12 md:text-lg">
              Today I was mob programming with Square's Mobile & Performance
              Reliability team and we toyed with an interesting idea. Our
              codebase has classes that represent screens a user can navigate
              to. These classes are defined in modules, and these modules have
              an owner team defined. When navigating to a screen, we wanted to
              have the owner team information available, at runtime. We created
              a build tool that looks at about 1000 Screen classes, determines
              the owner team, and generates a class to do the lookup at runtime.
              The generated code looked like this:
              <br />
              mapOf(vararg pairs: Pair) is a nice utility to create a map (more
              specifically, a LinkedHashMap) but using that syntax leads to the
              creation of a temporary vararg array of size 1000, as well as 1000
              temporary Pair instances. Memory hoarding Let's look at the
              retained size of the map we just created: ~30 characters per class
              name * 2 bytes per character = 60 bytes per entry Each entry is
              stored as a LinkedHashMapEntry which adds 2 references to
              HashMap.Node which itself holds 3 references and 1 int. On a 64bit
              VM that's 5 references * 8 bytes, plus 4 bytes for the int: 44
              bytes per entry. So for the entries alone we're at (60 + 44) *
              1000 = 104 KB. The default load factor is 75%, which means the
              size of the array backing the hashmap must always be at least 25%
              greater than the number of entries. And the array size has to be a
              factor of 2. So, for 1000 entries, that's an object array of size
              2048: 2048 * 8 = 16,314 bytes. The total retained size of the map
              is ~120 KB. Can we do better? Could we make it... 0?
              <h2 className="mt-4 text-3xl font-bold">100% code-based map</h2>
              What if we generate code that returns the right team for a given
              screen, instead of creating a map? Since we know the full list of
              screen classes, we can check ahead of time whether there's any
              hashcode conflict, and if not, we can generate code that directly
            </div>
          </div>
        </section>
        {/* End Blogs */}

        {/* Begin Comments */}
        <section id="comments">
          <div className="container mx-auto w-full md:w-10/12">
            <h2 className="my-8 text-3xl font-bold">Comments (3)</h2>
            <div className="items -center flex space-x-4">
              <div className="avater-img bg-indigo-600 text-white">
                <span className="">S</span>
              </div>
              <div className="w-full">
                <textarea
                  className="w-full rounded-md border border-slate-500 bg-[#030317] p-4 text-slate-300 focus:outline-none"
                  placeholder="Write a comment"
                ></textarea>
                <div className="mt-4 flex justify-end">
                  <button className="rounded-md bg-indigo-600 px-6 py-2 text-white transition-all duration-200 hover:bg-indigo-700 md:py-3">
                    Comment
                  </button>
                </div>
              </div>
            </div>

            {/* Comment One */}
            <div className="my-8 flex items-start space-x-4">
              <div className="avater-img bg-orange-600 text-white">
                <span className="">S</span>
              </div>
              <div className="w-full">
                <h5 className="text-slate -500 font-bold">Saad Hasan</h5>
                <p className="text-slate-300">
                  Today I was mob programming with Square's Mobile & Performance
                  Reliability team and we toyed with an interesting idea. Our
                  codebase has classes that represent screens a user can
                  navigate to. These classes are defined in modules, and these
                  modules have an owner team defined. When navigating to a
                  screen, we wanted to have the owner team information
                  available, at runtime. We created a build tool that looks at
                  about 1000 Screen classes, determines the owner team, and
                  generates a class to do the lookup at runtime. The generated
                  code looked like this:
                </p>
              </div>
            </div>

            {/* Comment Two */}
            <div className="my-8 flex items-start space-x-4">
              <div className="avater-img bg-green-600 text-white">
                <span className="">S</span>
              </div>
              <div className="w-full">
                <h5 className="text-slate -500 font-bold">Saad Hasan</h5>
                <p className="text-slate-300">
                  Today I was mob programming with Square's Mobile & Performance
                  Reliability team and we toyed with an interesting idea. Our
                  codebase has classes that represent screens a user can
                  navigate to. These classes are defined in modules, and these
                  modules have an owner team defined. When navigating to a
                  screen, we wanted to have the owner team information
                  available, at runtime. We created a build tool that looks at
                  about 1000 Screen classes, determines the owner team, and
                  generates a class to do the lookup at runtime. The generated
                  code looked like this:
                </p>
              </div>
            </div>

            {/* Comment Three */}
            <div className="my-8 flex items-start space-x-4">
              <div className="avater-img bg-indigo-600 text-white">
                <span className="">S</span>
              </div>
              <div className="w-full">
                <h5 className="text-slate -500 font-bold">Saad Hasan</h5>
                <p className="text-slate-300">
                  Today I was mob programming with Square's Mobile & Performance
                  Reliability team and we toyed with an interesting idea. Our
                  codebase has classes that represent screens a user can
                  navigate to. These classes are defined in modules, and these
                  modules have an owner team defined. When navigating to a
                  screen, we wanted to have the owner team information
                  available, at runtime. We created a build tool that looks at
                  about 1000 Screen classes, determines the owner team, and
                  generates a class to do the lookup at runtime. The generated
                  code looked like this:
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* End main */}

      {/* Floating Actions*/}
      <div className="floating-action">
        <ul className="floating-action-menus">
          <li>
            <img src="./assets/icons/like.svg" alt="like" />
            <span>10</span>
          </li>

          <li>
            {/* There is heart-filled.svg in the icons folder */}
            <img src="./assets/icons/heart.svg" alt="Favourite" />
          </li>
          <a href="#comments">
            <li>
              <img src="./assets/icons/comment.svg" alt="Comments" />
              <span>3</span>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};
