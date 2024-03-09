import { Input } from "@/components";
// import { Editor } from "novel";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { BlogFormThumbnail } from "./BlogFormThumbnail";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface Props extends React.ComponentProps<"div"> {}

interface FormValue {
  title: string;
  content: string;
  tags: string;
  thumbnail: File | null;
}

export const BlogForm = ({ ...rest }: Props) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({});

  const onSubmit = (data: FormValue) => {
    console.log(data);
  };
  return (
    <main {...rest}>
      <section>
        <div className="container">
          <form className="createBlog" onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="thumbnail"
              control={control}
              render={({ field }) => {
                return (
                  <BlogFormThumbnail
                    imgFile={field?.value}
                    handleChange={(file) => {
                      console.log(file);
                      field.onChange(file);
                    }}
                  />
                );
              }}
            />

            <div className="mb-6 *:text-white">
              <Input
                placeholder="Enter your blog title"
                register={register("title")}
                errorMsg={errors.title?.message}
                labelName="Title"
                className="input-flow"
              />
            </div>

            <div className="mb-6">
              <Input
                placeholder="Your Comma Separated Tags Ex. JavaScript, React, Node, Express,"
                register={register("tags")}
                errorMsg={errors.tags?.message}
                labelName="Tags"
                className="input-flow !placeholder:text-xs"
              />
            </div>

            
              <Controller
                name="content"
                control={control}
                render={({ field }) => (
                  <ReactQuill
                    theme="snow"
                    value={field.value}
                    onChange={field.onChange}
                    className="mb-6 text-white "
                    // style={{ minHeight: "300px" }}
                    
                  />
                )}
              />
            

            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-6 py-2 text-white transition-all duration-200 hover:bg-indigo-700 md:py-3 "
            >
              Create Blog
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};
