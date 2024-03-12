import { Cross, Input } from "@/components";
import { useAxios, usePortal } from "@/hooks";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Pencil } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface UpdateUserInfoProps extends React.ComponentPropsWithoutRef<"button"> {
  info: {
    id: string | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    bio: string | undefined;
  };
}

interface FormValues {
  firstName: string;
  lastName: string;
  bio: string;
}

export const UpdateUserInfo = ({ info, ...rest }: UpdateUserInfoProps) => {
  const api = useAxios();
  const queryClient = useQueryClient();
  const { renter, setIsShowPortal } = usePortal();

  const { mutateAsync } = useMutation({
    mutationKey: ["updateUserInfo"],
    mutationFn: (body: FormValues) => api.patch("/profile", body),
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      firstName: info.firstName,
      lastName: info.lastName,
      bio: info.bio,
    },
  });
  const onSubmit = async (data: FormValues) => {
    try {
      const req = await mutateAsync(data);
      if (req.status === 200) {
        toast.success("User info updated successfully");
        setIsShowPortal(false);
      }
    } catch (error) {
      console.log("🚀 onSubmit ", error);
      toast.error("something went wrong, try again later");
    }
  };

  return (
    <div title="Update User Info">
      <button
        {...rest}
        type="button"
        className=" alternative-orange flex items-center gap-x-1  px-4 py-2.5"
        onClick={() => setIsShowPortal(true)}
      >
        Edit
        <Pencil className="size-4" />
      </button>
      <>
        {renter(
          <>
            <div className="flex w-full items-center  justify-between">
              <p className="text-center text-xl font-bold">Update User Info</p>
              <span
                className="cursor-pointer rounded-md bg-gray-800 p-2 hover:bg-gray-700"
                onClick={() => setIsShowPortal(false)}
              >
                <Cross />
              </span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-4  w-full">
              <Input
                register={register("firstName", {
                  required: "First Name is required",
                })}
                labelName="First Name"
                errorMsg={errors.firstName?.message}
                className="w-full rounded-md border border-white/20   bg-slate-200 p-3 text-black  focus:border-indigo-500 focus:outline-none"
              />
              <Input
                register={register("lastName", {
                  required: "First Name is required",
                })}
                labelName="Last Name"
                errorMsg={errors.lastName?.message}
                className="w-full rounded-md border border-white/20   bg-slate-200 p-3 text-black  focus:border-indigo-500 focus:outline-none"
              />
              <label
                htmlFor="bio"
                className="block text-sm font-medium text-white"
              >
                Bio
              </label>
              <textarea
                {...register("bio", {
                  required: "Bio is required",
                })}
                className="min-h-32 w-full rounded-md border border-white/20 bg-slate-200   p-2 text-gray-900 focus:border-indigo-500 focus:outline-none"
              />
              {errors.bio && (
                <p className="mb-3 mt-1 animate-pulse text-sm text-red-500">
                  {errors.bio.message}
                </p>
              )}

              <button className="mt-8 w-full rounded-md bg-orange-600 px-4 py-2 text-sm font-medium text-white  hover:bg-orange-500 ">
                Submit
              </button>
            </form>
            ,
          </>,
        )}
      </>
    </div>
  );
};
