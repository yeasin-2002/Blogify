import { Editor } from "novel";
import React from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";

interface Props extends React.ComponentProps<"div"> {}

interface FormValue {
  key: string;
  value: string;
  description: string;
  type: string;
  tags: string;
  thumbnail: File;
}

export const CreateBlog = ({ ...rest }: Props) => {
  const { register } = useForm<FormValue>({});
  const location = useLocation();
  console.log("🚀 ~ CreateBlog ~ location:", location);

  return (
    <main {...rest}>
      <section>
        <div className="container">
          {/* Form Input field for creating Blog Post */}
          <form action="#" method="POST" className="createBlog">
            <div className="my-4 grid h-[150px] place-items-center rounded-md bg-slate-600/20">
              <div className="flex cursor-pointer items-center gap-4 transition-all hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                <p>Upload Your Image</p>
              </div>
            </div>
            <div className="mb-6">
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Enter your blog title"
              />
            </div>

            <div className="mb-6">
              <input
                type="text"
                id="tags"
                name="tags"
                placeholder="Your Comma Separated Tags Ex. JavaScript, React, Node, Express,"
              />
            </div>

            <div className="mb-6">
              <Editor
                disableLocalStorage={true}
                className="rounded-md border border-slate-600 bg-[#030317]"
                defaultValue={""}
                onUpdate={(value) => {
                  // console.log(value);
                  const html = value?.getHTML();
                }}
              />
              {/* <textarea
                id="content"
                name="content"
                placeholder="Write your blog content"
                rows={8}
              ></textarea> */}
            </div>

            <a
              href="./createBlog.html"
              className="rounded-md bg-indigo-600 px-6 py-2 text-white transition-all duration-200 hover:bg-indigo-700 md:py-3"
            >
              Create Blog
            </a>
          </form>
        </div>
      </section>
    </main>
  );
};
