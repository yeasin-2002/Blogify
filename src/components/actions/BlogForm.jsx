import { Input } from "@/components";
import { Controller, useForm } from "react-hook-form";
import { BlogFormThumbnail } from "./BlogFormThumbnail";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { TagsInput } from "../ui/TagsInput";

export const BlogForm = ({ onSave, defaultBlogValues, ...rest }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: defaultBlogValues?.title,
      content: defaultBlogValues?.content,
      tags: defaultBlogValues?.tags,
      thumbnail: defaultBlogValues?.thumbnail,
    } || {
      title: "",
      content: "",
      tags: "",
      thumbnail: "",
    },
  });

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("thumbnail", data.thumbnail);
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("tags", data.tags);
    onSave(formData);
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
                      field?.onChange(file);
                    }}
                    Register={register("thumbnail")}
                    errorMsg={errors?.thumbnail?.message}
                  />
                );
              }}
            />

            <div className="mb-6 *:text-white">
              <Input
                placeholder="Enter your blog title"
                register={register("title", {
                  required: "Title is required",
                  minLength: {
                    value: 5,
                    message: "Title should be atleast 5 characters",
                  },
                })}
                errorMsg={errors.title?.message}
                labelName="Title"
                className="input-flow "
              />
            </div>

            <Controller
              control={control}
              {...register("tags", {
                required: "Tags is required",
                validate: (value) => {
                  const tags = value.split(",");
                  return tags.length <= 5 || "You can add maximum 5 tags";
                },
              })}
              render={({ field }) => (
                <TagsInput
                  initialtags={field.value}
                  onSave={(data) => {
                    field.onChange(data);
                  }}
                />
              )}
            />
            {errors?.tags && (
              <p className="mb-6 text-sm text-red-500">
                {errors?.tags?.message}
              </p>
            )}

            <label
              htmlFor="content"
              className="text-slate-900 dark:text-slate-100"
            >
              Content
            </label>

            <Controller
              control={control}
              {...register("content", { required: "Content is required" })}
              render={({ field }) => (
                <ReactQuill
                  theme="snow"
                  id="content"
                  value={field.value}
                  onChange={field.onChange}
                  className="my-6   text-slate-900 dark:text-slate-100"
                />
              )}
            />
            {errors.content && (
              <p className="mb-6 text-sm text-red-500">
                {errors.content.message}
              </p>
            )}

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
