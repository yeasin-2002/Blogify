import { Avatar } from "@/components";
import { useAuth, useAxios, usePortal } from "@/hooks";
import { Comment } from "@/types";
import { cn } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { PreventCommentingIfUnauthenticated } from "./PreventCommentingIfUnauthenticated";
interface Props extends React.ComponentProps<"div"> {
  comments: Comment[];
}
interface FormValue {
  content: string;
}

export const CreateComment = ({ comments, ...rest }: Props) => {
  const { renter, setIsShowPortal } = usePortal();
  const queryClient = useQueryClient();
  const auth = useAuth();
  const api = useAxios();
  const params = useParams();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<FormValue>();

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["createComment", params.id],
    mutationFn: async (data: FormValue) =>
      api.post(`/blogs/${params.id}/comment`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    onSuccess: () => {
      setValue("content", "");
      return queryClient.invalidateQueries({
        queryKey: ["singleBlog", params.id],
      });
    },
  });

  const HandleOpenPortal = () => {
    if (!auth?.authUser) {
      return setIsShowPortal(true);
    }
    return setIsShowPortal(false);
  };

  const onSubmit = async (data: FormValue) => {
    try {
      const res = await mutateAsync(data);

      if (res.statusText !== "OK") {
        return toast.error("Failed to create comment");
      }
    } catch (error) {
      console.log(error);
      return toast.error("Failed to create comment");
    }
  };

  return (
    <div {...rest}>
      <h2 className="my-8 text-3xl font-bold">
        Comments
        {comments.length > 0 && `(${comments.length})`}
      </h2>
      <div className="flex items-start  space-x-4">
        <Avatar
          img={auth?.authUser?.avatar}
          name={auth?.authUser?.firstName}
          className="avater-img"
        />

        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <textarea
            {...register("content", { required: "Comment is required" })}
            className="w-full rounded-md border border-slate-500 bg-[#030317] p-4 text-slate-300 focus:outline-none"
            placeholder="Write a comment"
            onClick={HandleOpenPortal}
          ></textarea>
          {errors.content && (
            <p className="mt-2 text-red-500">{errors.content.message}</p>
          )}

          <div className="mt-4 flex justify-end">
            <button
              onClick={HandleOpenPortal}
              className={cn(
                "rounded-md bg-indigo-600 px-6 py-2 text-white transition-all duration-200 hover:bg-indigo-700 md:py-3",
                {
                  "cursor-not-allowed": !auth?.authUser,
                  "cursor-pointer": auth?.authUser,
                },
              )}
              disabled={!auth?.authUser}
            >
              {isPending ? "Loading..." : "Comment"}
            </button>
          </div>
        </form>
      </div>

      {renter(
        <PreventCommentingIfUnauthenticated
          setIsShowPortal={setIsShowPortal}
        />,
      )}
    </div>
  );
};
